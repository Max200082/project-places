<template>
    <div class="post">

        <Slider class="post__slider">
            <SliderItem
                v-for="(image, i) in post.images"
                :key="image"
                :data-index="i"
            >
                <img :src="image" alt="">
<!--                <img :src="image" alt="">-->
            </SliderItem>
        </Slider>
        <div class="post__body">
            <div class="post__info">
                <img src="https://i.ibb.co/T0Cvfy2/Ellipse-3-1.png" alt="">
                <div class="post__info_right">
                    <div class="post__title">{{ post.title }}</div>
                    <div class="post__date">
<!--                        <span><img src="/img/icons/calendar.svg" alt="">{{postDate.day + ' ' + postDate.month }}</span>-->
<!--                        <span><img src="/img/icons/hourglass.svg" alt="">{{ postDate.time}}</span>-->
                    </div>
                </div>
            </div>
            <div class="post__text">{{ postText }}</div>
            <div v-if="!isAll" @click="seeTextClick" class="post__see-all no-blue">See all</div>
            <div v-else @click="seeTextClick" class="post__see-all no-blue">Close</div>
            <div class="post__footer">
                <div @click="likeClick" class="post__likes post__footer-item no-blue">
                   <!-- <img class="no-blue" :src="require(`@/assets/img/icons/like${isLike ? '_active' : ''}.svg`)">{{ countLikes }} -->
                </div>
               <!-- <div class="post__comments post__footer-item"><img :src="require('@/assets/img/icons/comment.svg')">{{ post.countComments }}</div> -->
<!--                <div class="post__distance post__footer-item"><img :src="require('@/assets/img/icons/distance.svg')">{{ post.distance }}</div>-->
               <!-- <div class="post__repost"><img :src="require('@/assets/img/icons/repost.svg')" alt="repost"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "../slider/slider";
import SliderItem from '../slider/slider-item'
import {mapActions} from "vuex";

import './post.scss'
// TODO: изменить механизм изменения количество лайков
export default {
    name: "post",
    data: () => {
        return {
            postText: '',
            shortText: '',
            isAll: false,
            isLike: false,
            countLikes: 0
        }
    },
    props: {
        post: Object
    },
    components: {
        Slider,
        SliderItem
    },
    computed: {
        postDate() {
            const date = this.post.date
            return {
                month: date.toLocaleString('eng', {month: 'long'}).toLocaleLowerCase(),
                day: date.getDate(),
                time: date.toLocaleTimeString().substr(0, 5),
            }
        },
    },
    methods: {
        ...mapActions(['CHANGE_LIKE']),
        seeTextClick() {
            if (this.isAll) {
                this.postText = this.shortText
            } else {
                this.postText = this.post.text
            }
            this.isAll = !this.isAll
        },
        likeClick() {
            if (this.isLike) {
                this.countLikes--
            } else {
                this.countLikes++
            }
            this.isLike = !this.isLike
        }
    },
    mounted() {
        const text = this.post.text
        const length = 35
        if (text.split(' ').length > length + 8) {
            this.shortText = text.split(' ').slice(0, 35).join(' ') + '...'
            this.postText = this.shortText
        }
    },
    created() {
        this.isLike = this.post.isLiked
        this.countLikes = this.post.countLikes
        // проверяем поставил ли пользователь лайк или убрал
        // если значение не совпадает со значением из state, вызываеться action по изменению лайка
        // (для того чтобы не изменять лайк при каждом нажатии)
        setInterval(async() => {
            if (this.post.isLiked !== this.isLike) {
                await this.CHANGE_LIKE({postId: this.post.id, isLike: this.isLike})
            }
        }, 5000)
    }
}
</script>
