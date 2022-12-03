
import {Item} from "./item.js";
import {Product} from "./product.js";


const purchaseBut = document.getElementById('purchase-button');
let userItemMessage = document.getElementById("purchase-item-message");
const container = document.querySelector(".container");
let olTag = document.createElement("ol");
olTag.setAttribute ('style', 'padding: 0; margin-left: 30px;');
olTag.setAttribute('id', 'theList');

// input box
let selectedItem = document.getElementById("buy-item").value;

export class PurchaseItem {
    static itemsStore = Array()
    static costPrice = 0;
    constructor(name, price, id) {
        this._name = name;
        this._price = price;
        this._id = id
        // this._itemsStore = [];
    }

    getId() {
        return this._id 
    }

    getName() {
        return this._name
    }

    getPrice() {
        return this._price
    }

    static defineItem(name, price, id=0) {
        if(id == 0) {
           id = PurchaseItem.itemsStore.length + 1;
           price = this._price * Item.countItem.toFixed(2);
           name = selectedItem;
        }
        let newItem = new PurchaseItem(name, price, id)

        PurchaseItem.itemsStore.push(newItem);
        return newItem

        }

        // add Item.countItem from customer to this
        static findPrice(id, countItem) {
            let totalPrice = Product.catalogue.map((product) => {
                if(Product.getProductById(2)) {
                    return product._price  
                }
            })
            console.log(totalPrice)
            return totalPrice
        }

    }

    // let PriceResult = PurchaseItem.findPrice(productResultId)
    let PriceResult = PurchaseItem.findPrice(2)
    console.log(`This is the PriceResult: ${PriceResult}`)

    // this is taken from product.js
    let productResultId = Product.getProductById(1)

    

// id + item, retrieving an item itself
// where id = item




  