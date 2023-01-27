const axios = require('axios').default;

module.exports = {

    async listProducts () {

        let response = await axios.get(process.env.ENDPOINT_EXTERNAL_PRODUCTS);
        return response.data.products;

    }

}