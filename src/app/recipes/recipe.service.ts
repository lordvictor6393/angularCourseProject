import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('test recipe', 'test recipe description', 'http://www.potato.ie/media/1008/cheesy-potato-bites.jpg'),
        new Recipe('test recipe2', 'test recipe description2', 'http://www.potato.ie/media/1008/cheesy-potato-bites.jpg'),
        new Recipe('test recipe3', 'test recipe description3', 'http://www.potato.ie/media/1008/cheesy-potato-bites.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}