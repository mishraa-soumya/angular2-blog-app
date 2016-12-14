import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { BlogCategoriesService } from '../blog-categories.service';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";
import {PostsComponent} from "../posts/posts.component";

// Add the RxJS Observable operators.
import '../rxjs-operators';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css'],
  providers: [BlogCategoriesService]
})

export class BlogCategoriesComponent implements OnInit {
  errorMessage: string;
  @LocalStorage() public selectedCategory: any= {};
  @LocalStorage() categories: Categories[] = [];
  mode = 'Observable';
  
  constructor(private blogCategoryService: BlogCategoriesService) { }

  ngOnInit() {
      this.getAllCategories(); // fetch all the blog categories on initialization
  }

  /**
   * get all the categories from json
   */
  getAllCategories(): void {
      this.blogCategoryService.getAllCategories()
                              .subscribe(
                                  categories => {
                                    this.categories = categories;
                                    this.selectedCategory = "";
                                    this.blogCategoryService.allCategories = categories;
                                  },
                                  error => this.errorMessage = <any>error
                              );
                              
  }

  /**
   * update the property of the category
   */
   updateCategory (category): void {
    this.blogCategoryService.updateCategory(category)
        .then(
          data => {
            this.selectedCategory = data;
            return true;          
          },
          error => {
            console.error('Error updating category');
            return Observable.throw(error);
          }
        )     
    }
}