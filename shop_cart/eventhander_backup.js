// import {Item} from "./eventhandler.js";
// import {initialize} from "./initialize.js";

const purchaseBut = document.getElementById('purchase-button');
const butAddItem = document.getElementById("item-add");
const butSubtractItem = document.getElementById("minus-item");
const userItemMessage = document.getElementById("purchase-item-message");


export class Eventhandler {
    static countItem = 0;
    constructor(name,addItem, minusItem,id, itemsStore) {
        this._addItem = addItem;
        this._minusItem = minusItem;
        
    }
    static itemAmount() {
        return document.getElementById('itemAmount');
    }

    static selectedItem() {
        // input box
        return document.getElementById("buy-item").value;
    }

    // add item
    static addItem(itemAmount) {
        Eventhandler.countItem++;
        console.log(Eventhandler.countItem)
        Eventhandler.itemAmount().innerHTML = Eventhandler.countItem;
        return this._addItem;
    }
    
    // decrement item
    static minusItem(itemAmount, countItem) {
        if(Eventhandler.countItem >= 1) {
            Eventhandler.countItem--;
            console.log(Eventhandler.itemAmount())
            Eventhandler.itemAmount().innerHTML = Eventhandler.countItem;
            return this._minusItem;
        }
    }

        // static purchaseItem() {
        //     let purchasedItem = super.storeItem(Eventhandler.selectedItem())
        //     console.log(purchasedItem)
            // return userItemMessage.innerHTML = purchasedItem
    // }

}

// purchase item button
// purchaseBut.addEventListener("click", () => {
//     // input box
//     let selectedItem = document.getElementById("buy-item").value;
//     let purchasedItem = Item.getName(selectedItem)
//     return userItemMessage.innerHTML = purchasedItem
// })

purchaseBut.addEventListener("click", Eventhandler.purchaseItem);
butAddItem.addEventListener("click", Eventhandler.addItem);
butSubtractItem.addEventListener("click", Eventhandler.minusItem)