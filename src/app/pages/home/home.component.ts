import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  $posts!: Observable<Post[]>;

  constructor(private apiService: PostService) { }

  ngOnInit(): void {
    this.$posts = this.apiService.getAllPosts();
  }

}
