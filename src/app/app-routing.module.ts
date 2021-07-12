import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/:postId', component: PostComponent },
  { path: 'users/:userId/posts', component: UserPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
