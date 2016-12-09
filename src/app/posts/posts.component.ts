import { Component, OnInit } from '@angular/core';
/* import class */
import { Posts } from '../posts';
/* import posts service */
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public posts: Posts[], private postService: PostsService) { }

  ngOnInit() {

  }

  getPosts (categoryId: number) {
    this.postService.getAllPosts(categoryId)
      .subscribe()
  } 

}
