import { createSelector } from 'reselect'

export const postWithComments = createSelector(
    state => state.users.posts,
    state => state.users.comments,
    (posts, comments) => {
        const newPost = posts.slice(0, 10);
        const newComments = comments.slice(0, 10);
        for (let i = 0; i < newPost.length; i++) {
            if (i < newComments.length / 2) {
                newPost[i]["comments"] = newComments[i];
            }
        }
        return newPost;
    }
);
