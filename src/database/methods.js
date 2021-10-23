import { dynamodb, dynamoClient } from './config';

async function getAllItemsAws(table) {
  try {
    const params = {
      TableName: table,
    };
    const data = await dynamoClient.scan(params).promise();
    console.log(data);
    return data.Items;
  } catch (error) {
    console.error(error);
  }
}
async function getItemByQueryAws(key, table) {
  try {
    const params = {
      Key: key,
      TableName: table,
    };
    const result = await dynamoClient.get(params).promise();
    return result.Item
  } catch (error) {
    console.error(error);
  }
}

export { getAllItemsAws, getItemByQueryAws };