import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  userId$!: Observable<number>;
  posts$!: Observable<Post[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postServise: PostService
    ) { }

  ngOnInit(): void {
    this.userId$ =  this.activatedRoute.params.pipe(
      map(params => params.userId), 
      tap(userId => {
        this.posts$ = this.postServise.getPostsByUserId(userId);
      }));
  }

}
