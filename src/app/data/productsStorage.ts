import 'src/stub/menuStubs'
import { ProductData, ResponseDto, MenuItem } from './productData';
import { List } from 'linqts';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
   })
   
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
        var result:List<ProductData> = new List<ProductData>();

        let arr = this.menuObject.menu as unknown as Array<MenuItem>;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element.group == category) {
                result.Add(new ProductData(element.name, element.name, +element.price))
            }
        }
        return result.ToArray();      
    }
}