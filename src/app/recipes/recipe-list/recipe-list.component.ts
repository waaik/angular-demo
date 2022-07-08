import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeServiceService : RecipeServiceService){}

  
  ngOnInit(){
    this.recipes = this.recipeServiceService.getRecipes();
  }
 
}
