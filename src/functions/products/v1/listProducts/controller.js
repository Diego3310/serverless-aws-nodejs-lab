const Service = require('./service');

module.exports = {

    async listProducts () {
        try{
            return await Service.listProducts();
        }catch(error){
            console.error(error);
            return new CustomExeception('500','Internal Server Error');
        }
    }

}