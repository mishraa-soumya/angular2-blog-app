import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 

import { Categories } from './categories';
import { Observable } from 'rxjs/observable'; // using this you have to explicitly import observable operators
//import { Observable } from 'rxjs/Rx'; // it will import all the data
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * @description To Import Lodash Library
 */
import * as _ from "lodash";  

@Injectable()
export class BlogCategoriesService {
  private categoriesUrl = './app/categories.json'; // Url to get blog categories 
  
  public allCategories: Categories[] = [];

  constructor (private http: Http) {
  }
  
  getAllCategories (): Observable<Categories[]> {
      return this.http.get(this.categoriesUrl)
                      .map(this.extractData)
                      .catch(this.handleError);
                      //.map(response => response.json());
  }

  private extractData(res: Response){
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if(error instanceof Response) {
      const body = error.json() || '';
      const err  = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);  
  }

  updateCategory (category: Categories): Promise<Categories> {
    let categoryId = category.id;
    let updatedData = {
      selected: !category.selected
    }
    
    let getCategoryById = this.getCategoryById(categoryId);
    if(getCategoryById){
      Object.assign(getCategoryById, updatedData);  
    }
    return Promise.resolve(getCategoryById);
  }
  
  resetSelectedCategories (): Categories [] {
    let blogCategories = this.allCategories;

    _.forEach(blogCategories, function(category){
        category.selected = false; 
    })
    return blogCategories; 
  }

  getCategoryById (id: number): any {
    
    let blogCategories = this.resetSelectedCategories();
    return blogCategories
        .filter(category => category.id === id)
        .pop();
  }

}