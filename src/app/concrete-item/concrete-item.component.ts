import { Component, OnInit, Input } from '@angular/core';
import { MyOrderService } from '../my-order/service/my-order-service';
import { ProductData } from '../data/productData';

@Component({
  selector: 'app-concrete-item',
  templateUrl: './concrete-item.component.html',
  styleUrls: ['./concrete-item.component.css']
})
export class ConcreteItemComponent implements OnInit {

  itemsCount:number;
  constructor(private orderService:MyOrderService) { }

  ngOnInit() {
    this.itemsCount = 0;
  }
  @Input()
  productDescription:string;
  @Input()
  productPrice:number;
  @Input()
  productName:string;

  onIncreaseClicked() {
    this.itemsCount++;
  }

  onDecreaseClicked() {
    if(this.itemsCount > 0){
      this.itemsCount--;
    }
  }

  onAddToCartClicked(){
    const currentProductData = new ProductData(this.productName, this.productDescription, this.productPrice);
    this.orderService.addToMyOrder(currentProductData, this.itemsCount);
  }
}
