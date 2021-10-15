<template>
    <div class="auth">
        <div
            :style="{background: `url(/img/auth/back.png) center no-repeat`, backgroundSize: '100%'}"
            class="auth__bg"
        ></div>
        <div class="auth__container container-auth">
            <div class="auth__body body-auth">
                <router-link tag="div" class="auth__title auth__title title-auth title-auth__disappear" :to="feedUrl">Events</router-link>
                <router-link tag="div" class="auth__body-title title-auth" :to="feedUrl">Events</router-link>
                <div class="auth__body-text">Enter <span>login</span> and<br><p>password</p></div>
                <div class="auth__form form-auth">
                    <div class="form-auth__input">
                        <input v-model="form.email" type="email" placeholder="Your email">
                    </div>
                    <div class="form-auth__input">
                        <input v-model="form.password" type="password" placeholder="Your password">
                    </div>
                    <router-link :to="recoverPassUrl" class="form-auth__forgot">Forgot password?</router-link>
                    <Button @btnClick="login" :type="'login'">Log in</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/auth/button.vue'
import Validation from '@/utils/validation'
import {FEED_URL, RECOVER_PASS_URL} from "../../utils/consts";
import {mapActions} from 'vuex'

export default {
    name: "login-auth",
    data: () => {
        return {
            feedUrl: FEED_URL,
            recoverPassUrl: RECOVER_PASS_URL,
            form: {
                email: '',
                password: '',
            },
            resolution: 0,
        }
    },
    components: {
        Button
    },
    methods: {
        ...mapActions(['LOGIN']),
        async login () {
            let validateResult = Validation.validateLogin(this.form)
            if (validateResult) {
                alert(validateResult)
                return false
            }

            const response = await this.LOGIN(this.form)
            console.log(response)
            // дальше код зависит от бэка
            // ...
            // когда будет готов api, поменять на 400
            // if (response.status===404) {
            //     this.$router.push('/login/error')
            // }
            if (response.status===200) {
                // обработка успешной регистрации
                // записть пользователя в state
                // запись accessToken в localStorage
                // редирект на главную
            }
        }
    },
    created() {
        this.resolution = window.innerWidth
    }
}

</script>
