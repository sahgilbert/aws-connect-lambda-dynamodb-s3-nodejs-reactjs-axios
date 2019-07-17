'use strict';

var AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.createCustomer = function(event, context, callback){
	var params = {
		Item : {
			"PhoneNumber" : event.PhoneNumber,
			"AccountBalance" : event.AccountBalance
		},
		TableName : process.env.TABLE_NAME
	};
	documentClient.put(params, function(error, data){
		callback(error, data);
	});
}