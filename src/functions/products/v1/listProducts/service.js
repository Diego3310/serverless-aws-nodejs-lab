const DataAccess = require('./data-access');
const Product = require('../../../../models/product');

module.exports = {

    async listProducts () {
        let response = await DataAccess.listProducts();
        let products = response.map(product => new Product(product));
        return products;
    }

}