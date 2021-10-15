<template>
    <div class="slider">
        <div class="slider__container">
            <div @click="slide($event.target)" ref="sliderWrapper" class="slider__wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import './slider.scss'

export default {
    name: "carousel",
    data: () => {
        return {

        }
    },
    methods: {
        slide (target) {
            let targetSlideIndex = target.closest('div').dataset.index
            console.log(targetSlideIndex)
            const wrapper = this.$refs.sliderWrapper
            wrapper.style.transform = `translateX(-${wrapper.clientWidth}px)`
            console.log(getComputedStyle(wrapper).transform)
        }
    }
}
</script>
