<template>
  <component :is="layout" v-cloak>
      <router-view/>
  </component>
</template>

<script>
// import desktopLayout from '@/layouts/desktop-layout'
// import mobileLayout from '@/layouts/mobile-layout'
export default {
    name: 'App',
    // components: {
    //     desktopLayout,
    //     mobileLayout
    // },
    computed: {
        layout() {
            // if (this.$route.meta.layout === 'main') {
            //     if (window.innerWidth > 768) {
            //         return 'desktop-layout'
            //     }
            //     return  'mobile-layout'
            // }
            return 'div'
        }
    }
}
</script>

<style lang="scss">
body {
    overflow-x: hidden !important;
    //width: 100vw;
}
</style>