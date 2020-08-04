import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductsStorage } from './data/productsStorage';
import { data } from './data/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menuApp';
  messages = this.http.get<any[]>('http://192.168.2.104:4201');

  constructor(private http: HttpClient, private productsStorage: ProductsStorage) {
    // this.messages.forEach(element => {
    //   this.productsStorage.setMenuObject(element);
    // });
    this.productsStorage.setMenuObject(data)
  }
}
