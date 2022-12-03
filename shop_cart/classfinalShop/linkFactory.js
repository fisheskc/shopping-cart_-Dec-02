import {initialize} from "./initialize.js";
import {eventhandler} from "./eventhandler.js";
import {list} from "./list.js";
let itemsStore=[];

export class LinkFactory {
    static async makeLink(linkName, config) {
        let link;
        let linkModule = await import(linkName + ".js");

        link = eval("new linkModule." +linkName+"(config)")

        return link;
    }

}







