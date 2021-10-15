<template>
    <div class="main" id="uu">
        <div class="main__header-mobile">
            <HeaderMobile />
        </div>
        <div class="main__container">
            <div class="header">
                <Header />
            </div>
            <div class="main__body">
                <div class="main__nav">
                    <Nav />
                </div>
                <div class="main__content">
                    <router-view/>
                </div>
                <div class="main__options">
                    <Options />
                </div>
            </div>
        </div>
        <div class="main__menu-mobile">
            <MenuMobile />
        </div>
    </div>
</template>

<script>
import Header from '@/components/header/Header'
import Post from '@/components/post/post.vue'
import Nav from '@/components/nav/Nav'
import Profile from '@/views/profile/Profile'
import Feed from '@/views/feed/home-feed'
import Options from '@/components/options/Options'
import AddPost from '@/views/add-post/AddPost'
import HeaderMobile from '@/components/header-mobile/HeaderMobile'
import MenuMobile from '@/components/menu-mobile/MenuMobile'


export default {
    name: "main",
    data: ()=> {},
    components: {
        Header,
        Post,
        Nav,
        Profile,
        Feed,
        Options,
        AddPost,
        HeaderMobile,
        MenuMobile,
    },
}

</script>


<style scoped>
    .main{
        position: relative;
    }
    .main__container {
        max-width: 1241px;
        padding: 0px 15px 200px 15px;
        margin: 0 auto;
    }

    .main__body{
        display: flex;
        justify-content: space-between;
    }

    .main__nav {
     
    }

    .main__content{
        width: 769px;
        height: 100%;
        margin: 0px 50px;
    }
    @media(max-width: 750px) {
        .main__container {
            max-width: 362px;
            padding: 0px 15px 100px 15px;
            margin: 0 auto;
        }
        .main__nav {
            display: none;
        }

        .main__options {
            display: none;
        }

        .header {
            display: none;
        }
        .main__content {
            margin: 0 auto;
        }
        .main__container {
            max-width: 500px;
            padding: 0px 15px 200px 15px;
            margin: 0 auto;
        }
        .main__content{
            max-width: 769px;
            margin: 0 auto;
        }
    }
    @media(min-width:751px) {
        .main__header-mobile{
            display: none;
        }
        .main__menu-mobile{
            display: none;
        }
        
    }
    .main__menu-mobile{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>