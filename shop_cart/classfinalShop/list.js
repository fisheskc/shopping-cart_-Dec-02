// loop through store items 
// create html items in here
// define an li
import {Item} from "./item.js";
import {index} from "./linkFactory.js/index.js";
import {initialize} from "./initialize.js";
import {eventhandler} from "./eventhandler.js";

const firstLi = document.getElementById("firstLi");
const secondLi = document.getElementById("secondLi");


export function list(itemsStore) {
    for(let i = 0; i < itemsStore.length; i++) {
        // list of items in items store
        // per item for ol, li
        // need to enter details here for both lis
        let liItems = document.createElement("li");
        let useritem = itemsStore[i]
        liItems.innerHTML = `The big box: ${useritem}`
        liItems.appendChild(li);
        
    }


}