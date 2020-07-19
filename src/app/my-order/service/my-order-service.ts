import { ProductData } from 'src/app/data/productData';
import { Injectable } from '@angular/core';
import { List } from 'linqts';


@Injectable({
    providedIn: 'root'
   })
   
export class MyOrderService{
    items:List<OrderItemInfo> = new List<OrderItemInfo>();

    addToMyOrder(item:ProductData, count:number){
        var orderInfo = this.items.FirstOrDefault(x => x.item.name == item.name);
        if (orderInfo != null) {
            orderInfo.count = orderInfo.count + count;
            return;
        }
        this.items.Add(new OrderItemInfo(item, count));
    }

    removeSingleFromOrder(item:ProductData){
        if (this.items.Any(x => x.item.name == item.name)) {
            var itemData = this.items.First(x => x.item.name == item.name)
            if (itemData.count > 1) {
                itemData.count--;
            } else {
                this.items.Remove(itemData);
            }
        }
    }

    addSingle(item:ProductData){
        this.items.FirstOrDefault(x => x.item.name == item.name).count++;
    }

    removeAllFromOrder(){
        this.items.Clear();
    }

    getCurrentList():List<OrderItemInfo>{
        return this.items;
    }
}

export class OrderItemInfo{
    constructor(public item:ProductData, public count:number){}
}