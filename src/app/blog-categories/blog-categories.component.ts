import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { BlogCategoriesService } from '../blog-categories.service';


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
  categories: Categories[];
  mode = 'Observable';
  
  constructor(private blogCategoryService: BlogCategoriesService) { }

  ngOnInit() {
      this.getAllCategories(); // fetch all the blog categories on initialization
  }

  getAllCategories() {
      this.blogCategoryService.getAllCategories()
                              .subscribe(
                                  categories => this.categories = categories,
                                  error => this.errorMessage = <any>error
                              );
                              
  }
}