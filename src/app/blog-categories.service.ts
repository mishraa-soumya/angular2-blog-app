import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 

import { Categories } from './categories';
import { Observable } from 'rxjs/observable'; // using this you have to explicitly import observable operators
//import { Observable } from 'rxjs/Rx'; // it will import all the data
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 

@Injectable()
export class BlogCategoriesService {
  private categoriesUrl = './app/categories.json'; // Url to get blog categories 
  
  constructor (private http: Http) { }
  
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

}

