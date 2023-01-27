const DataAccess = require('./data-access');

module.exports = {

    async listProducts () {
        let response = await DataAccess.listProducts();
        return response;
    }

}