import { dynamodb, dynamoClient } from './config';

export const createTable = (TableName, KeySchema, AttributeDefinitions, ProvisionedThroughput) => {
  const params = {
    TableName,
    KeySchema,
    AttributeDefinitions,
    ProvisionedThroughput,
  };
  return new Promise((res, rej) => {
    dynamodb.createTable(params,
      (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
  });
};

export const loadData = (TableName, newData) => {
  newData.forEach((Item) => {
    const params = {
      TableName,
      Item,
    };
    return new Promise((res, rej) => {
      dynamoClient.put(params,
        (err, data) => {
          if (err) {
            rej(err);
          } else {
            res(data);
          }
        });
    });
  });
};
export const getDataByKey = (TableName, Key, KeyConditionExpression) => {
  // key is a object
  const params = {
    TableName,
    Key,
    ...(KeyConditionExpression && { KeyConditionExpression }),
  };
  return new Promise((res, rej) => {
    dynamoClient.get(params,
      (err, data) => {
        if (err || Object.keys(data).length === 0) {
          rej(err);
        } else {
          res(data);
        }
      });
  });
};

export const postData = (TableName, Item) => {
  const params = {
    TableName,
    Item,
  };
  return new Promise((res, rej) => {
    dynamoClient.put(params,
      (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
  });
};
export const addAToArrayData = (TableName, Key, field, id) => {
  const params = {
    TableName,
    Key,
    UpdateExpression: `set ${field} = list_append(${field},:id)`,
    ExpressionAttributeValues: {
      ':id': [id],
    },
    ReturnValues: 'UPDATED_NEW',
  };
  return new Promise((res, rej) => {
    dynamoClient.update(params,
      (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
  });
};
export const getDataByCondition = (TableName, KeyConditionExpression, ExpressionAttributeValues, ExpressionAttributeNames) => {
  const params = {
    TableName,
    ...(KeyConditionExpression && { KeyConditionExpression }),
    ...(ExpressionAttributeNames && { ExpressionAttributeNames }),
    ...(ExpressionAttributeValues && { ExpressionAttributeValues }),
  };
  return new Promise((res, rej) => {
    dynamoClient.scan(params,
      (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
  });
};

export const updateDataByKeyConditional = (TableName, Key, UpdateExpression, ExpressionAttributeValues, ConditionExpression) => {
  const params = {
    TableName,
    Key,
    UpdateExpression,
    ExpressionAttributeValues,
    ...(ConditionExpression && { ConditionExpression }),
    ReturnValues: 'UPDATED_NEW',
  };
  return new Promise((res, rej) => {
    dynamoClient.update(params,
      (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
  });
};

export const deteteDataByKeyConditional = (TableName, Key, ConditionExpression, ExpressionAttributeValues) => {

  const params = {
    TableName,
    Key,
    ConditionExpression,
    ExpressionAttributeValues,
  };
  return new Promise((res, rej) => {
    dynamoClient.delete(params,
      (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
  });
};
