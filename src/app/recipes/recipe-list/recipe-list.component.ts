import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Beer Can Chicken', 'Chicken and beer', 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2009/4/23/0/SG1004_19397_s4x3.jpg', []),
    new Recipe('Oatmeal Cookies', 'Delicious', 'http://thimbleanna.com/images/2008/food/OatmealCookieStack.jpg', []),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
    
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
