import 'src/stub/menuStubs'
import { burgers, beer, pizza } from 'src/stub/menuStubs'
import { ProductData, ResponseDto, MenuItem } from './productData';
import { List } from 'linqts';
import { EventEmitter } from '@angular/core';

export class ProductsStorage{

    onMenuUpdated:EventEmitter<ResponseDto> = new EventEmitter<ResponseDto>();
    menuObject:ResponseDto;
    setMenuObject(response:{}){
        this.menuObject = response as ResponseDto;
        this.onMenuUpdated.emit(this.menuObject);
    }

    getCategories():Array<string>{
        const result = new List<string>();

        let arr = this.menuObject.menu as unknown as Array<MenuItem>;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if(!result.Contains(element.group)){
                result.Add(element.group);
            }
        }

        // this.menuObject.menu.menuItems.ForEach(x => {
        //     if(!result.Contains(x.group)){
        //         result.Add(x.group);
        //     }
        // })
        return result.ToArray();
    }

    getProductsByCategory(category:string):ProductData[]{
        var input:string;
        switch(category){
            case 'burgers':
                input = burgers;
                break;
            case 'beer':
                input = beer;
                break;
            case 'pizza':
                input = pizza;
                break;
        }
        var result:ProductData[] = [];
        const data:Array<{name:string, description:string, price:number}> = JSON.parse(input);
        
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let item = new ProductData();
            item.name = element.name;
            item.description = element.description;
            item.price = element.price;
            result.push(item);
        }

        return result;      
    }
}