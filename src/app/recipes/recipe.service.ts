import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
     'A super-tasty Schnitzel - just awesome!',
      'https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=6&m=603258520&s=612x612&w=0&h=axf0fSvz5dPHabGBz2sFbk717W7_4rcjjcyDmarLumg=',
      [
        new Ingredient ('Meat', 1),
        new Ingredient ('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
     'What else you need to say?',
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
     [
       new Ingredient ('Buns', 2),
       new Ingredient ('Meat', 1)
     ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
