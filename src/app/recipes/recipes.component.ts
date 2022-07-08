import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from './recipe-service.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServiceService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeServiceService: RecipeServiceService) { }

  ngOnInit() {

  this.recipeServiceService.recipeSelected.subscribe((recipe : Recipe) => {
    this.selectedRecipe = recipe;
  });
  }

}
