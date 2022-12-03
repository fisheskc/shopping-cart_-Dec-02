const container = document.querySelector(".container");
const butAddItem = document.getElementById("item-add");
const butSubtractItem = document.getElementById("minus-item");


export class Item {
    static countItem = 0;
    constructor(addItem, minusItem) {
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
    static addItem() {
        Item.countItem++;
        // Item.itemAmount().innerHTML = Item.countItem;
        // push the item in here to itemsStore array
        console.log(Item.countItem)
        // connect input box to here also
        // Item.itemAmount().innerHTML = Item.countItem;
        // return this._addItem;
    }

    // add item
    // static addItem(itemAmount) {
    //     Eventhandler.countItem++;
    //     console.log(Eventhandler.itemAmount())
    //     Eventhandler.itemAmount().innerHTML = Eventhandler.countItem;
    //     return this._addItem;
    // }
    
    // decrement item
    static minusItem(itemAmount, countItem) {
        if(Item.countItem >= 1) {
            Item.countItem--;
            console.log(Item.countItem)
            // Item.itemAmount().innerHTML = Item.countItem;
            return this._minusItem;
        }
    }
  
}


// console.log(Item.addItem(4))
// console.log(Item.addItem())
Item.minusItem()



butAddItem.addEventListener("click", () => { 
    Item.addItem()
});
butSubtractItem.addEventListener("click", Item.minusItem);