import {mockPosts} from "../../utils/mock-data";

export default {
    SAVE_USER (state, user) {
        state.user = user
    },
    SAVE_POSTS (state, posts) {
        // state.posts = posts
        // mock data
        state.posts = mockPosts
    },
    CHANGE_LIKE(state, obj) {
        // имитация изменения постов
        // зависит об бэка
        const newPosts = state.posts.map((post) => {
            if (post.id === obj.postId) {
                post.isLiked = obj.isLike
                obj.isLike ? post.countLikes++: post.countLikes--
            }
            return post
        })
        state.posts = newPosts
    }
}
