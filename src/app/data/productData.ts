import { List } from 'linqts';

export class ProductData{
    constructor(public name:string, public description:string, public price:number){}
}

export interface ResponseDto{
    menu:Menu 
}

export interface Menu{
    menuItems:Array<MenuItem>
}

export interface MenuItem{
    origin:string
    group:string
    name:string
    art:string
    id:string
    type:string
    measurement:string
    price:string
}