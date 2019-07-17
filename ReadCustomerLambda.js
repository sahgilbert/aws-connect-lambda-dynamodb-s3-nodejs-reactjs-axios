'use strict';

var AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.readCustomer = function(event, context, callback){

    var customerPhoneNumber = event.Details.ContactData.CustomerEndpoint.Address;

	var params = {
		Key : {
			"PhoneNumber" : customerPhoneNumber
        },
        ProjectionExpression: 'AccountBalance',
		TableName : process.env.TABLE_NAME
	};
	documentClient.get(params, function(error, data){
        if(error)
        { 
            callback(error, null);
        }
        else
        {
            callback(null, data.Item);
        }
	});
}