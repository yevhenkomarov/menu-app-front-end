import { Component, OnInit } from '@angular/core';
import { ProductsStorage } from '../data/productsStorage';

@Component({
  selector: 'app-board-games',
  templateUrl: './board-games.component.html',
  styleUrls: ['./board-games.component.css']
})
export class BoardGamesComponent implements OnInit {

  games:Array<string>;
  constructor(private dataProvider: ProductsStorage) { }

  ngOnInit() {
    this.games = this.dataProvider.getBoardGames();
  }

}
