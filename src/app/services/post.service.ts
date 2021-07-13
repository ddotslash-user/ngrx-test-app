import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private api: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getAllPosts(): Observable<Post[]> { 
    return this.http.get<Post[]>(`${this.api}/posts`);
  }


  public getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.api}/posts/${id}`);
  }

  public getPostsByUserId(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}/users/${id}/posts`);
  }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.api}/posts`, post).pipe(
      map(post => {
        post.userId = post.authorId;
        return post;
      })
    );
  }

  public deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.api}/posts/${id}`);
  }
}
