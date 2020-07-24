import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsStorage } from '../data/productsStorage';import { ProductData } from '../data/productData';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})

export class CategoryItemComponent implements OnInit {

  itemName:any;
  products:ProductData[];
  constructor(private route: ActivatedRoute, productsStorage: ProductsStorage) {
    this.route.params.subscribe(params => {
      this.itemName = params.name;
      this.products = productsStorage.getProductsByCategory(params.name)
        }
      )
   }

  ngOnInit() {
  }

}
