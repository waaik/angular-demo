import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListServiceService } from '../shopping-list/shopping-list-service.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [ 
    new Recipe('Test name', 'Test desc', 'https://th.bing.com/th/id/R.b8f54daefcf18c526df4f98ed371907a?rik=PSzLTrkn%2fApdbQ&riu=http%3a%2f%2fportfolio.cpl.co.uk%2finspire%2f2019-autumn%2frecipes-intro%2fright.jpg&ehk=Z4QR7P7URO7Qh4gZkOmCCdsd0XIYQSFsdbU95LVmESs%3d&risl=&pid=ImgRaw&r=0', [new Ingredient("kale", 2), new Ingredient("craisins", 20)]),
    new Recipe('Test name', 'Test desc', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps115227_TH153340C10_01_3b.jpg', [new Ingredient("Spinach", 1), new Ingredient("Green Peppers", 2)])
  ];

  constructor(private shoppingListService : ShoppingListServiceService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients : Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
