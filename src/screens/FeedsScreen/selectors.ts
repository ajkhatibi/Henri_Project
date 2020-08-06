import { createSelector } from 'reselect'

export const postWithComments = createSelector(
    state => state.users.posts,
    state => state.users.comments,
    (posts, comments) => {
        for (let i = 0; i < posts.length; i++) {
            if (i < comments.length / 2) {
                posts[i]["comments"] = comments[i];
            }
        }
        return posts;
    }
);
