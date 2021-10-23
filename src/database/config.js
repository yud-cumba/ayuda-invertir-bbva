require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.VUE_APP_REGION,
  accessKeyId: process.env.VUE_APP_ACCESS_KEY,
  secretAccessKey: process.env.VUE_APP_SECRET_KEY,
});

console.log('AQUI', AWS.config);

const dynamodb = new AWS.DynamoDB();
const dynamoClient = new AWS.DynamoDB.DocumentClient();

export { dynamodb, dynamoClient };
