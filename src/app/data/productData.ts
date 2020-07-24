import { List } from 'linqts';

export class ProductData{

    name:string;
    description:string;
    price:number;
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