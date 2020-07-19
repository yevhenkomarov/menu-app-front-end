import 'src/stub/menuStubs'
import { items, burgers, beer, pizza } from 'src/stub/menuStubs'
import { ProductData } from './productData';

export class ProductsStorage{
    getCategories():string[]{
        return items;
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