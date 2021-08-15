import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeComponent },
  { path: 'stocks', component: StocksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
