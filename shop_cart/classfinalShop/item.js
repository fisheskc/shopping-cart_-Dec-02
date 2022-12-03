const container = document.querySelector(".container");
let olTag = document.createElement("ol");
olTag.setAttribute ('style', 'padding: 0; margin-left: 30px;');
olTag.setAttribute('id', 'theList');

export class Item {
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

    list(arr, name, price, id) {
        itemsStore.map(({box,price}) => {
                let liTag = document.createElement("li");
                liTag.innerHTML = `Your item is: <b>${box}</b> and the price is: <b>£${price}</b>.`
                olTag.appendChild(liTag);
            })    
        container.appendChild(olTag);
    
    }
}
