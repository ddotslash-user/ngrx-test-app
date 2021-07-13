import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, throwError } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { Post } from "../models/post.model";
import { PostService } from "../services/post.service";
import * as PostsActionsTypes from './posts.actions';


@Injectable()
export class PostsEffects {
    loadAllPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActionsTypes.getPosts),
            mergeMap(() => {
                return this.postsServise.getAllPosts().pipe(
                    map(posts => PostsActionsTypes.getPostsSuccess({posts}))
                )
            }),
            catchError(error => {
                return of(PostsActionsTypes.getPostsFailed);
            })
        )
    })


    createPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActionsTypes.createPost),
            exhaustMap(action => {
                return this.postsServise.createPost(action.post)
                    .pipe(
                        tap((post: Post) => {
                            this.router.navigate([`posts/${post.id}`])
                        }),
                        map((post: Post) => {
                            return PostsActionsTypes.createPostSuccess({post});
                        }),
                        catchError(error => {
                            return of(PostsActionsTypes.createPostFailed);
                        })
                    )
            })
        )
    })

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActionsTypes.deletePost),
            exhaustMap(action => {
                return this.postsServise.deletePost(action.id)
                    .pipe(
                        map(response => {
                            this.router.navigate(['']);
                            return PostsActionsTypes.deletePostSuccess({id: action.id});
                        }),
                        catchError(error => {
                            return of(PostsActionsTypes.deletePostFailed)
                        })
                    )
            })
        )
    })
    

    constructor(
        private actions$: Actions,
        private postsServise: PostService,
        private router: Router
    ) {}
}