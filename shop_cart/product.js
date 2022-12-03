

export class Product {
     static catalogue = []
    constructor(name, price, id) {
        this._name = name;
        this._price = price;
        this._id = id
    }

    static defineProduct(name, price, id=0) {
        if(id == 0) {
           id = Product.catalogue.length + 1;
        }
        let newProduct = new Product(name, price, id)

        Product.catalogue.push(newProduct);
        return newProduct

        }

    static getProductById(id) {
        let productsFound = Product.catalogue.find(product => id === product._id)
        return productsFound 
    }   
    
}

function outputCatalogue() {
    let result = Product.catalogue.map((product) => `This is product._name: ${product._name}, price: ${product._price} `)
    return result
}

// let newProduct = new Product('Comb', 2.99, 1);
Product.defineProduct('Comb', 2.99, 1)
// console.log(newProduct)
// Product.catalogue.push(newProduct)
// console.log(catalogue)


//add to catalogue array
Product.defineProduct('laptop', 550, 2)
console.log(Product.catalogue)
console.log(outputCatalogue())

let productResultId = Product.getProductById(1)

console.log(productResultId)
