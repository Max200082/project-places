<template>
    <div class="auth registration">
        <div
            :style="{background: `url(/img/auth/back.png) center no-repeat`, backgroundSize: '100%'}"
            class="auth__bg auth__bg"
        ></div>

        <router-link tag="div" class="registration__title auth__title title-auth title-auth__disappear_l" :to="feedUrl">Events</router-link>
        <div class="auth__container container-auth">
            <div class="auth__body body-auth">
                <div class="auth__body_pic">
                    <label for="input-pic">
                        <img v-if="!isImgPreview" src="/img/auth/plus.svg">
                        <span v-if="!isImgPreview" class="no-blue">Event picture</span>
                        <img class="auth__body_preview" v-if="isImgPreview" :src="imgPreview" alt="">
                    </label>
                    <input ref="inputImg" @change="loadPicture($event)" type="file" accept="image/*" id="input-pic">
                </div>
                <div class="auth__body-text body-text-auth">Enter <span>Username,</span><br><p>email</p> and <span>password</span></div>
                <div class="auth__form form-auth">
                    <div class="form-auth__input">
                        <input v-model="form.username" type="text" placeholder="Username">
                        <div v-if="form.username.length < 1" class="form-auth__label"><img alt="" src="/img/auth/sharp.svg"><span>Mandatory input field</span></div>
                    </div>
                    <div class="form-auth__input">
                        <input v-model="form.email" type="email" placeholder="Your email">
                        <div v-if="form.email.length < 1" class="form-auth__label"><img alt="" src="/img/auth/sharp.svg"><span>Mandatory input field</span></div>
                    </div>
                    <div class="form-auth__input">
                        <input v-model="form.password" type="password" placeholder="Your password">
                        <div v-if="form.password.length < 1" class="form-auth__label"><img alt="" src="/img/auth/sharp.svg"><span>Mandatory input field</span></div>
                    </div>
                    <div @click="$router.push('recover-password')" class="form-auth__forgot">Forgot password?</div>
                    <Button @btnClick="register" :type="'login'">Sign in</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/auth/button.vue'
import {mapActions} from 'vuex'
import {FEED_URL} from "../../utils/consts";
import Validation from "../../utils/validation";

export default {
    name: "registration-auth",
    data: () => {
        return {
            feedUrl: FEED_URL,
            form: {
                username: '',
                email: '',
                password: '',
                file: ''
            },
            isAnyInputFocused: false,
            isImgPreview: false,
            imgPreview: ''
        }
    },
    components: {
        Button
    },
    methods: {
        ...mapActions(['REGISTER']),
        loadPicture(e) {
            let file = e.target.files[0]
            this.isImgPreview = true
            if (file.size > 10*1024*1024) {
                alert('File size should not exceed 10 MB')
                return false
            }
            let fileReader = new FileReader()
            this.form.file = file
            fileReader.readAsDataURL(file)
            fileReader.addEventListener('loadend', () => {
                this.imgPreview = fileReader.result
                this.isImgPreview = true
            })
        },
        async register() {
            let validateResult = Validation.validateRegistration(this.form)
            if (validateResult) {
                alert(validateResult)
                return false
            }
            const formData = addDataToForm(this.form)
            const response = await this.REGISTER(formData)
            console.log(response)
            // дальше код зависит от бэка
            // ...
            if (response.status===200) {
                // обработка успешной регистрации
                // записть пользователя в state
                // запись accessToken в localStorage
                // редирект на главную
            }
        }
    },
    mounted() {
    }
}
const addDataToForm = (form) => {
    const formData = new FormData()
    formData.append('avatar', 'asdfasf')
    formData.append('username', form.username)
    formData.append('email', form.email)
    formData.append('password', form.password)
    return formData
}
</script>

