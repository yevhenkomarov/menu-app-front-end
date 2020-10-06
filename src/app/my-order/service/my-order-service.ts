import { ProductData } from 'src/app/data/productData';
import { Injectable } from '@angular/core';

const storageKey:string = 'CurrentOrder';

@Injectable({
    providedIn: 'root'
   })
   
export class MyOrderService{
    items:Array<OrderItemInfo> = this.getCurrentList();

    addToMyOrder(item:ProductData, count:number){
        let orderInfo:OrderItemInfo;
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            if(element.item.name == item.name){
                orderInfo = element;
            }
        }
        if (orderInfo != null) {
            orderInfo.count = orderInfo.count + count;
        }
        else{
            this.items.push(new OrderItemInfo(item, count));
        }
        
        this.storeData(this.items);
    }

    removeSingleFromOrder(item:ProductData){
        if (this.items.some(x => x.item.name == item.name)) {
            var itemData = this.items.find(x => x.item.name == item.name)
            if (itemData.count > 1) {
                itemData.count--;
            } else {
                let index = this.items.indexOf(itemData);
                this.items.splice(index, 1);
            }
        }
        this.storeData(this.items);
    }

    addSingle(item:ProductData){
        if (this.items.length == 0) {
            this.items = this.getCurrentList();
        }
        this.items.find(x => x.item.name == item.name).count++;
        this.storeData(this.items);
    }

    removeAllFromOrder(){
        this.items = new Array<OrderItemInfo>(0);
        localStorage.removeItem(storageKey);
    }

    getCurrentList():Array<OrderItemInfo>{
        if (localStorage.getItem(storageKey)) {
            var res = JSON.parse(localStorage.getItem(storageKey));
            var list = new Array<OrderItemInfo>();
            for (let i = 0; i < res.length; i++) {
                const element = res[i];
                list.push(element);
            }
            return list;
        }
        else{
            return new Array<OrderItemInfo>();
        }
    }

    storeData(currentItems:Array<OrderItemInfo>){
        localStorage.setItem(storageKey, JSON.stringify(currentItems));
    }
}

export class OrderItemInfo{
    constructor(public item:ProductData, public count:number){}
}