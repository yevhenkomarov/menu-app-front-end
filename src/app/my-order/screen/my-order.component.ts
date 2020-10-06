import { Component, OnInit } from '@angular/core';
import { MyOrderService, OrderItemInfo } from '../service/my-order-service';
import { ProductData } from 'src/app/data/productData';
import { List } from 'linqts';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  items:Set<OrderItemInfo>;
  totalPrice:number = 0;
  constructor(private orderService:MyOrderService) { }

  ngOnInit() {
    this.updateOrderList();
  }

  onRemoveClicked(data:ProductData){
    this.orderService.removeSingleFromOrder(data);
    this.updateOrderList();
  }

  onAddClicked(data:ProductData){
    this.orderService.addSingle(data);
    this.updateOrderList();
  }

  private updateOrderList(){
    this.items = new Set<OrderItemInfo>();
    const currentList = this.orderService.getCurrentList();
    const count = currentList.length;
    for (let i = 0; i < count; i++) {
      const element = currentList[i];
      this.items.add(element);
    }

    this.updateTotalPrice();
  }

  private updateTotalPrice(){
    this.totalPrice = 0;
    if (this.items.size == 0) {
      this.totalPrice = 0;
    } else {
      this.items.forEach(element => {
        this.totalPrice = +this.totalPrice + +element.item.price * element.count;
      });
    }
  }

}
