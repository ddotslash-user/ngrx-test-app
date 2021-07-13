import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { createPost } from 'src/app/store/posts.actions';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  createPostForm!: FormGroup;

  post$!: Subscription;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.createPostForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required ]],
      authorId: ['', [Validators.required]],
    });
  }

  formSubmit(): void {
    if(this.createPostForm.valid) {
      this.store.dispatch(createPost({post: this.createPostForm.value}));
    }
  }
}






