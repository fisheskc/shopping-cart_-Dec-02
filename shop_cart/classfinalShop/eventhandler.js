import {Item} from "./item.js";
import {initialize} from "./initialize.js";

const purchaseBut = document.getElementById('purchase-button');
const butAddItem = document.getElementById("item-add");
const butSubtractItem = document.getElementById("minus-item");
const userItemMessage = document.getElementById("purchase-item-message");

let countItem = 0;

export class eventhandler {
    constructor(addItem, minusItem,id, itemsStore) {
        this._addItem = addItem;
        this._minusItem = minusItem;
    }
    // add item
    static addItem() {
        countItem++;
        itemAmount.innerHTML = countItem;
        return this._addItem;
    }
    
    // decrement item
    static minusItem() {
        countItem--;
        itemAmount.innerHTML = countItem;
        return this._minusItem;
    }

}


// let addItem = () => {
//     countItem++;
//     itemAmount.innerHTML = countItem;
// }
// // decrement item
// let minusItem = () => {
//     if(countItem >= 1) {
//         countItem--;
//         itemAmount.innerHTML = countItem;
//     }
// }
// purchase item button
purchaseBut.addEventListener("click", () => {
    // input box
    let selectedItem = document.getElementById("buy-item").value;
    let purchasedItem = Item.getName(selectedItem)
    return userItemMessage.innerHTML = purchasedItem
});

butAddItem.addEventListener("click", eventhandler.addItem);
butSubtractItem.addEventListener("click", eventhandler.minusItem);