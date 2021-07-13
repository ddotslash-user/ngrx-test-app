import { createAction, props, Action } from "@ngrx/store";
import { Post } from "../models/post.model";

export const getPosts = createAction('[Get] Post');
export const getPostsSuccess = createAction('[Get] Post Success', props<{posts: Post[]}>());
export const getPostsFailed = createAction('[Get] Post Failed');

export const createPost = createAction('[Create] Post', props<{post: Post}>());
export const createPostSuccess = createAction('[Create] Post Success', props<{post: Post}>());
export const createPostFailed = createAction('[Create] Post failed');

export const deletePost = createAction('[Delete] Post', props<{id: number}>());
export const deletePostSuccess = createAction('[Delete] Post Success', props<{id: number}>());
export const deletePostFailed = createAction('[Delete] Post Failde');







