'use strict';

var AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.readAllCustomers = function(event, context, callback){
	var params = {
		TableName : process.env.TABLE_NAME
	};
	documentClient.scan(params, function(error, data){
		if(error)
		{
		    callback(error, null);
		}
		else{
		    callback(null, data.Items);
		}
	});
}