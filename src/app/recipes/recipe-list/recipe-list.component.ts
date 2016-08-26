import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  tmpRecipe = new Recipe("Temp", "Temp", "http://www.clipartkid.com/images/752/yacht-charter-first-hand-charter-customer-reviews-2aRsBC-clipart.gif");

  constructor() { }

  ngOnInit() {
    
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
