import {Item} from "./item.js";

const purchaseBut = document.getElementById('purchase-button');
let userItemMessage = document.getElementById("purchase-item-message");
const container = document.querySelector(".container");
let olTag = document.createElement("ol");
olTag.setAttribute ('style', 'padding: 0; margin-left: 30px;');
olTag.setAttribute('id', 'theList');

export class PurchaseItem {
    static itemsStore = Array()
    static costPrice = 0;
    constructor(name, price, id) {
        this._name = name;
        this._price = price;
        this._id = id;
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
}

purchaseBut.addEventListener("click",() => {
    // input box
let selectedItem = document.getElementById("buy-item").value;
console.log(selectedItem)
PurchaseItem.itemsStore.push(selectedItem);
PurchaseItem.itemsStore.map((box) => {
let liTag = document.createElement("li");
liTag.innerHTML = `Your item is: <b>${box}</b>.`
olTag.appendChild(liTag);
})
container.appendChild(olTag);
});



// let resourceClasses = new Map()
// function createResourceCards() {
//     for (i = 0; i < ResourcesArray.length; i++) {
//         let newResource = new Resource(ResourcesArray[i], 0)
//         resourceClasses.set(ResourcesArray[i], newResource);
//     }

// }

// purchaseBut.addEventListener("click",() => {
//     // input box
//     let selectedItem = document.getElementById("buy-item").value;
//     console.log(selectedItem)
//     let purchasedItem = new PurchaseItem(selectedItem);
//     let itemName = purchasedItem.getName();
//     let itemPrice = purchasedItem.getPrice();
//     let itemId = purchasedItem.getId();
//     console.log(purchasedItem)
    
// });

// purchaseBut.addEventListener("click",() => {
//     // input box
// let selectedItem = document.getElementById("buy-item").value;
// console.log(selectedItem)
// let purchasedItem = new PurchaseItem(selectedItem);
// let itemId = purchasedItem.getId();
// let itemName = purchasedItem.getName();
// let itemPrice = purchasedItem.getPrice();
// console.log(purchasedItem)
// PurchaseItem.itemsStore.push(itemPrice,itemName,itemId);
// PurchaseItem.itemsStore.map((box) => {
// let liTag = document.createElement("li");
// liTag.innerHTML = `Your item is: <b>${purchasedItem.box}</b>.`
// olTag.appendChild(liTag);
// })
// container.appendChild(olTag);
// });