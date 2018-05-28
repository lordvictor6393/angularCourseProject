import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Banana', 3)
    ];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.getIngredients().slice());
    }

    addIngredients(ingredientsList: Ingredient[]) {
        this.ingredients.push(...ingredientsList);
        this.ingredientsChanged.emit(this.getIngredients().slice());
    }
}