import { Component, OnInit } from '@angular/core';
import { ProductsStorage } from '../data/productsStorage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.css']
})
export class MenuGroupComponent implements OnInit {

  categories: string[]
  group:string;
  constructor(private dataProvider: ProductsStorage, route:ActivatedRoute) { 
    route.params.subscribe(params => {
        this.group = params['name'];
    })
   }

  ngOnInit() {
    if (this.dataProvider.menuObject == undefined) {
      this.dataProvider.onMenuUpdated.subscribe(() => {
        this.categories = this.dataProvider.getCategoriesByGroup(this.group);
      })
    }
    else {
      this.categories = this.dataProvider.getCategoriesByGroup(this.group);
    }
  }

}
