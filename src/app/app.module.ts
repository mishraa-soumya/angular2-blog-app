import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

// Routes for the application
//import { AppRoutes } from "./app.routes";

import { AppComponent } from './app.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
    //RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
