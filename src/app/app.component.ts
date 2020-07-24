import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductsStorage } from './data/productsStorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'menuApp';
  messages = this.http.get<any[]>('http://localhost:4201');

  constructor(private http: HttpClient, private productsStorage: ProductsStorage) {
    this.messages.forEach(element => {
      this.productsStorage.setMenuObject(element);
    });
  }
  ngOnInit(): void {
  }
}
