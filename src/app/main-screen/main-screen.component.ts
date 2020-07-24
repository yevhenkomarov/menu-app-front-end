import { Component, OnInit } from '@angular/core';
import { ProductsStorage } from '../data/productsStorage';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  items: string[]
  constructor(private dataProvider:ProductsStorage) { }

  ngOnInit() {
    this.dataProvider.onMenuUpdated.subscribe(x => {
      this.items = this.dataProvider.getCategories();
    })
  }

}
