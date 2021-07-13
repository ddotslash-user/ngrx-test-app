import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { selectPostByUser } from 'src/app/store/posts.selectors';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  userId$!: Observable<number>;
  posts$!: Observable<Post[] | null>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
    ) { }

  ngOnInit(): void {
    this.userId$ = this.activatedRoute.params.pipe(
      first(),
      map(params => params.userId), 
      tap(userId => {
        this.posts$ = this.store.select(selectPostByUser(userId));
      }));

  }

}
