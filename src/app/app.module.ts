import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PostListComponent } from './shared/post-list/post-list.component';
import { PostCardComponent } from './shared/post-card/post-card.component';
import { PostComponent } from './pages/post/post.component';
import { TextShorter } from './pipes/text-shorter';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postsReducer } from './store/posts.reducer';
import { PostsEffects } from './store/posts.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { getPosts } from './store/posts.actions';
import { LogoComponent } from './shared/logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    PostCardComponent,
    PostComponent,
    TextShorter,
    UserPostsComponent,
    CreatePostComponent,
    LogoComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({posts: postsReducer}, {}),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private store: Store) {
    this.store.dispatch(getPosts());
  }
}
