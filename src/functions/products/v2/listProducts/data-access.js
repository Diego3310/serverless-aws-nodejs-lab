const axios = require('axios').default;
const aws = require('aws-sdk')
const db = new aws.DynamoDB.DocumentClient();

module.exports = {

    async listProducts () {
        const param = {
            "TableName": process.env.PRODUCT_DB,
            "IndexName": "status-products-index",
            "KeyConditionExpression": "#status = :vstatus",
            "ExpressionAttributeNames": {
                "#status" : "status"
            },
            "ExpressionAttributeValues": {
                ":vstatus" : "ACTIVE"
            }
        }


        const products =  await db.query(param).promise()
        return products.Items;

    }

}