
export class ProductData{
    constructor(public name:string, public description:string, public price:number){}
}

export interface ResponseDto{
    menu:Array<MenuItem>
    excluded_groups:Array<string>
    board_games:Array<string>
}

export interface MenuItem{
    group:string
    category:string
    name:string
    art:string
    id:string
    type:string
    measurement:string
    price:string
    description:string
}