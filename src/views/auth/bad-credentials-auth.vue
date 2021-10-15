<template>
    <div class="auth">
        <div
            :style="{background: `url(/img/auth/back.png') center no-repeat`, backgroundSize: '100%'}"
            class="auth__bg auth__bg-blurred"
        ></div>
        <div class="auth__body">
            <div class="auth__error error-auth">
                <div class="error-auth__title">Error</div>
                <div class="error-auth__text">Wrong login or password</div>
                <div @click="() => $router.push('/login')" class="error-auth__link">Re-enter</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "bad-credentials-auth",
    data: () => {
        return {
            publicPath: process.env.BASE_URL,
        }
    }
}
</script>
