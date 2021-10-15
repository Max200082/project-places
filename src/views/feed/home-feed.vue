<template>
    <div class="feed">
        <!-- <router-link tag="h1" to="/auth">Events</router-link> -->
        <Post
            v-for="post in $store.state.posts"
            key="post.id"
            :post="post"
        />
    </div>
</template>

<script>
import Header from '@/components/header/Header'
import Post from '@/components/post/post.vue'
import {mapActions} from "vuex";

export default {
    name: "home-feed",
    data: ()=> {},
    components: {
        Header,
        Post
    },
    methods: {
        ...mapActions(['GET_POSTS'])
    },
    created() {
        this.GET_POSTS()
    }
}
</script>

