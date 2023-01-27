const aws = require('aws-sdk')
const uuid = require('uuid').v4;
const Product = require('../../../../models/product')
const db = new aws.DynamoDB.DocumentClient();

module.exports = {

    async createProduct(payload) {
        
        let product = new Product({
            id: uuid(),
            brand: payload.brand,
            category: payload.category,
            price: payload.price,
            stock: payload.stock,
            title: payload.title,
            status: 'ACTIVE'
        })
        
        await db.put({
            TableName: process.env.PRODUCT_DB,
            Item: product
        }).promise()

        return product;

    }

}