import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { first } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  $post!: Observable<Post>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
    ) { }

  ngOnInit(): void {
     this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.$post = this.postService.getPostById(params.postId);
    });
  }

}
