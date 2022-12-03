const purchaseBut = document.getElementById('purchase-button');
const userItemMessage = document.getElementById("purchase-item-message");
const container = document.querySelector(".container");
let olTag = document.createElement("ol");
olTag.setAttribute ('style', 'padding: 0; margin-left: 30px;');
olTag.setAttribute('id', 'theList');
// input box

let selectedItem = document.getElementById("buy-item").value;
console.log(selectedItem)

export class PurchaseItem {
    static itemsStore=[
        {id: 1, box:"smallbox", price: 2.99}, 
        {id: 2, box:"largebox", price: 3.99},
        {id: 3, box:"harddisk", price: 250},
        {id: 4, box:"garden book", price: 5.99},
        {id: 5, box:"laptop", price: 700} 
    ]

    constructor(name, price, id) {
        this._name = name;
        this._price = price;
        this._id = id;
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
    getPurchaseItem(selectedItem, AddToItemsStore) {
        // calls the        
       AddToItemsStore = PurchaseItem.itemsStore.push({selectedItem})
        console.log(AddToItemsStore)
        return AddToItemsStore 
    }
   
}

let itemToBuy = new PurchaseItem("box", 1.99, 1)

// purchaseBut.addEventListener("click", () => {

//     itemToBuy.getPurchaseItem();
// });
purchaseBut.addEventListener("click",() => {
    itemToBuy.getPurchaseItem().map(({box}) => {
        let liTag = document.createElement("li");
        liTag.innerHTML = `Your item is: <b>${box}</b>.`
        return olTag.appendChild(liTag);
    })
    container.appendChild(olTag);
});
  