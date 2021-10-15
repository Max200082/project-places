<template>
    <div class="auth">
        <div
            :style="{background: `url(/img/auth/back.png) center no-repeat`, backgroundSize: '100%'}"
            class="auth__bg auth__bg"
        ></div>
        <div class="auth__container container-auth">
            <div class="auth__body body-auth">
                <router-link tag="div" class="auth__title auth__title title-auth title-auth__disappear" :to="feedUrl">Events</router-link>
                <router-link tag="div" class="title-auth" to="/">Events</router-link>
                <div class="auth__body-text body-text-auth"><span>Login</span> or create a <spa>new</spa><br><p>account</p></div>
                <Button @btnClick="$router.push('login')" :type="'login'">Log in</Button>
                <Button @btnClick="$router.push('registration')" :type="'registration-btn'">Sign in</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/auth/button.vue'
import {FEED_URL} from '../../utils/consts'

export default {
    name: "home-auth",
    data: ()=> {
        return {
            feedUrl: FEED_URL
        }
    },
    components: {
        Button
    }
}
</script>
