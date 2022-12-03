import {Product} from "./product.js";

const today = new Date().toLocaleDateString('en-GB', {  
    day:   'numeric',
    month: 'short',
    year:  'numeric',
});

console.log(`This is the date today ${today}`)


export class Catalogue extends Product {
    constructor(description, date, id) {
        this._date = date;
        this._description = description;
        this._id = id
        super(productResultId)
    }

    getDescription(productResultId) {
        return this._description
    }

    getDate(productResultId) {
        return this._date = today 
    }

    static defineDescription(description, date, id) {
        // Add description to product
        let descriptionOfProduct = new Catalogue(description, date, id);

        Product.catalogue.push(newProduct);
        return descriptionOfProduct;
    }

}
// console.log(Catalogue.defineDescription('The laptop is new, 64 bit of ram, graphics card and 1TB',date,2));
