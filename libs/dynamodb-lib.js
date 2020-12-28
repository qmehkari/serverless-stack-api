import AWS from "aws-sdk";

//console.log("Preclient");
AWS.config.update({ region: "us-west-1" });
const client = new AWS.DynamoDB.DocumentClient();
//console.log("post client");

export default {
  get: (params) => client.get(params).promise(),
  put: (params) => client.put(params).promise(),
  query: (params) => client.query(params).promise(),
  update: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise(),
};