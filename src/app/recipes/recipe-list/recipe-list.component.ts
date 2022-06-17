import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [ 
    new Recipe('Test name', 'Test desc', 'https://th.bing.com/th/id/R.b8f54daefcf18c526df4f98ed371907a?rik=PSzLTrkn%2fApdbQ&riu=http%3a%2f%2fportfolio.cpl.co.uk%2finspire%2f2019-autumn%2frecipes-intro%2fright.jpg&ehk=Z4QR7P7URO7Qh4gZkOmCCdsd0XIYQSFsdbU95LVmESs%3d&risl=&pid=ImgRaw&r=0'),
    new Recipe('Test name', 'Test desc', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps115227_TH153340C10_01_3b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
