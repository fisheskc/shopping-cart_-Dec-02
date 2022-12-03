
import {Item} from "./item.js";

export function initialize(itemsStore) {

itemsStore=[
    {id: 1, box:"smallbox", price: 2.99}, 
    {id: 2, box:"largebox", price: 3.99},
    {id: 3, box:"harddisk", price: 250},
    {id: 4, box:"garden book", price: 5.99},
    {id: 5, box:"laptop", price: 700}   
];

storeItem("box", 1.99, 1)

storeItem("bigBox", 4.99, 2)

console.log(itemsStore)


    function storeItem(name, price, id) {
        let item = new Item("box", 1.99, 1)
        console.log(item)
        return itemsStore.push(item)
    }

}
