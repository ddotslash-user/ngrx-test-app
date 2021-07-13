import { createSelector } from "@ngrx/store";
import { Post } from "../models/post.model";

export const selectAllPosts = createSelector(
    (state: any) => state.posts, 
    (posts: Post[]) => posts
);

export const selectOnePost = (id: number ) => createSelector(
    (state: any) => state.posts, 
    (posts: Post[]) => { 
        return posts.find((post: Post) => post.id == id);
    }
);

export const selectPostByUser = (id: number) => createSelector(
    (state: any) => state.posts,
    (posts: Post[]) => {
        return posts.filter((post: Post) => post.userId == id);
    }
)
