

class Product {

      constructor({id,title,price,stock,brand,category,status}){
        this.id       = id;
        this.title    = title;
        this.price    = price;
        this.stock    = stock;
        this.brand    = brand;
        this.category = category;
        this.status   = status;
      }
}

module.exports = Product;