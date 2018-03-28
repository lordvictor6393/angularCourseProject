import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'cheesy potato', 
            'cheesy potato description', 
            'http://www.potato.ie/media/1008/cheesy-potato-bites.jpg',
            [
                new Ingredient('cheese', 1),
                new Ingredient('potato', 5),
            ]
        ),
        new Recipe(
            'test recipe2', 
            'test recipe description2', 
            'http://www.potato.ie/media/1008/cheesy-potato-bites.jpg',
            [
                new Ingredient('apple', 3),
                new Ingredient('banana', 2),
            ]
        ),
        new Recipe(
            'test recipe3', 
            'test recipe description3', 
            'http://www.potato.ie/media/1008/cheesy-potato-bites.jpg',
            [
                new Ingredient('bread', 2),
                new Ingredient('pear', 10)
            ]
        )
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}