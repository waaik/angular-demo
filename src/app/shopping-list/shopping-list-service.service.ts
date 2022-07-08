import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {
  ingredientChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Pears', 3)
  ];
  constructor() { }

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice())
  }
}
