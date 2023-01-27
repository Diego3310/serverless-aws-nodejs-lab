const DataAccess = require('./data-access');

module.exports = {

    async createProduct (payload) {
        return await DataAccess.createProduct(payload);
    }

}