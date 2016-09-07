import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import { HeaderComponent } from './header.component';
import { RecipesComponent, RecipeDetailComponent, RecipeItemComponent, RecipeListComponent } from './recipes';
import { ShoppingListAddComponent, ShoppingListComponent} from './shopping-list';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListAddComponent,
    ShoppingListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
