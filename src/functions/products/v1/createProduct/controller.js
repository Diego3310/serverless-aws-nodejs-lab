
const CustomExeception = require('../../../../models/custom.exception');
const Service = require('./service');

module.exports = {

    async createProduct (payload) {
 
        try {
            let newProduct = await Service.createProduct(payload);
            return newProduct
        }catch(error){
            console.error(error)
            return new CustomExeception('500','Internal Server Error')
        }
        
    }

}