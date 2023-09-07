import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.css']
})
export class CocktailItemComponent {

  @Input() cocktails: Array<any> = [];
  @Output() onAddFavorite = new EventEmitter<Object>();

  constructor () {}

  // Emit cocktails to event listeners.
  onAddFavoriteCocktail(i: number): void {
    this.onAddFavorite.emit(this.cocktails[i]);
  }
}
