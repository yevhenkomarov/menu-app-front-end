import { Component, OnInit } from '@angular/core';
import { items } from 'src/stub/menuStubs'

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  items:string[] = items;
  constructor() { }

  ngOnInit() {
  }

}
