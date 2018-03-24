import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingListService.getIngredients();
    this.ShoppingListService.ingredientsChanged
      .subscribe(
        (ingredientsList: Ingredient[]) => {
          this.ingredients = ingredientsList;  
        }
      )
  }
}
