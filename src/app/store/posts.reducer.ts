import { ActionReducer, createReducer, on, Action } from '@ngrx/store';
import { Post } from '../models/post.model';
import * as PostsActionsTypes from './posts.actions';


export const initialState: Post[] = [];

export const postsReducer = createReducer(
    initialState,
    on(PostsActionsTypes.getPostsSuccess, (state, { posts }) => {
        return ([...posts])
    }),
    on(PostsActionsTypes.deletePostSuccess, (state, { id }) => {
        return ([...state.filter(post => post.id !== id)]);
    }),
    on(PostsActionsTypes.createPostSuccess, (state, { post }) => {
        return ([post, ...state]);
    })
)