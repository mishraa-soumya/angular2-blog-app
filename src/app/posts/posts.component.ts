import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
/* import class */
import { Posts } from '../posts';
/* import class */
import { Categories } from '../categories';
/* import posts service */
import { PostsService } from '../posts.service';
/* import posts service */
import { BlogCategoriesService } from '../blog-categories.service';


@Component({
  selector: 'blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ PostsService ]
})
export class PostsComponent implements OnInit {
  
  @Input()
  category: Categories;
  private posts: Posts[];
  public  categoryPosts: Posts[];
  constructor(private postService: PostsService) { }
  
  ngOnInit() {
    this.getAllPosts();
    console.log(this.posts) ;
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let categoryId: any;
    for (let propName in changes) {
      let changedProp = changes[propName];
      if(propName === 'category'){
        categoryId = changedProp.currentValue.id;  
      }
    }

    if(categoryId !== undefined) {
      this.categoryPosts = this.getCategoryPosts(categoryId);
    }
  }  
  
  /**
   * @name  getAllPosts 
   * @description get all the posts from json file 
   * @memberOf PostsComponent
   */
   
  getAllPosts () {
      this.postService.getAllPosts()
      .subscribe(
        (post) => {
          this.posts = post;
        }
      )
  }

  getCategoryPosts (categoryId : any) {
    
    let allPosts = this.posts;
    let filteredPosts = [];
    filteredPosts = allPosts.filter(post => post.categoryId === categoryId);
    return filteredPosts;     
  }

}