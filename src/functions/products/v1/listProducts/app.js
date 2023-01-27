
const Controller = require('./controller');

module.exports.handler = async (event) => {
    console.log(`event: ${ JSON.stringify(event)}`)
    return await Controller.listProducts();
}