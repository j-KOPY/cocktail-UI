import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  types: Array<string> = ["Alcoholic", "Non alcoholic", "Alcohol optional"];
  index: number = 0;
  alcoholFilter: String = this.types[0];
  cocktails: Array<Object> = [];
  cocktailsCopy: Array<Object> = [];

  constructor(private HttpService: HttpService) {};

  filterAlcoholic() {
    if (this.index > 2) {
      this.index = 0;
    }
    this.alcoholFilter = this.types[this.index];

    this.cocktails = this.cocktailsCopy.filter((el:any) => el.strAlcoholic == this.types[this.index])

    this.index += 1;
  }

  onAddFavoriteCocktail(favoriteCocktail: any) {
      console.log(favoriteCocktail.strDrink + " added as favorite!");
      Object.defineProperty(this.cocktails.find( (el:any) => el.idDrink == favoriteCocktail.idDrink), 'favorite', {value: true})
  }

  ngOnInit(): void {
    
    this.HttpService.getCocktail().subscribe( data => {
      
      this.cocktailsCopy = data.drinks;
      return this.cocktails = data.drinks;
    })
  }
}
