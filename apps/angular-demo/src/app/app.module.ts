import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider'
import { MatSidenavModule } from '@angular/material/sidenav';
import { RecipesComponent } from './recipes/recipes.component';
import { StocksComponent } from './stocks/stocks.component';
import { RecipeComponent } from './recipe/recipe.component'

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
