import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { first } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { deletePost } from 'src/app/store/posts.actions';
import { selectOnePost } from 'src/app/store/posts.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$!: Observable<Post | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.post$ = this.store.select(selectOnePost(params['postId']));
    });
  }

  deletePost(id: any):void {
    this.store.dispatch(deletePost({id}));  
  }
}
