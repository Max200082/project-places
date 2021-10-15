<template>
    <div class="map">
        <yandex-map :settings="settings">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A83a4620db048d8457c82ca82c2df6097315d90520c8d5a81040a54fd4c08fd9f&amp;source=constructor" 
            width="100%" height="500px" frameborder="0"></iframe>
        </yandex-map>
    </div>
</template>

<style scoped>
    .map {
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        overflow: hidden;
    }
</style>

