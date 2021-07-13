import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { getPosts } from 'src/app/store/posts.actions';
import * as PostsSelectorsTypes from '../../store/posts.selectors';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts$!: Observable<Post[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(PostsSelectorsTypes.selectAllPosts);
  }

}
