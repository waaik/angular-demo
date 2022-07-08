import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListServiceService } from './shopping-list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private igChangeSub: Subscription

  constructor(private shoppingListService: ShoppingListServiceService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredient();
    this.igChangeSub = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients
      });
  }

  ngOnDestroy(): void{
    this.igChangeSub.unsubscribe();
  }

  
}
