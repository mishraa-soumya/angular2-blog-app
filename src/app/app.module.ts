import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { LocalStorageService } from "angular2-localstorage/LocalStorageEmitter";
// Routes for the application
//import { AppRoutes } from "./app.routes";

import { AppComponent } from './app.component';
/**
 * @description Component for Blog Categories
 */
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';

/**
 * @description To Import Lodash Library
 */
import * as _ from "lodash";  

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
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
