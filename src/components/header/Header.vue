<template>
    <div class="header">
        <div class="header__container">
        <router-link class="header__logo" tag="h1" to="/auth">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM6.35282 25C6.35282 35.2986 14.7014 43.6472 25 43.6472C35.2986 43.6472 43.6472 35.2986 43.6472 25C43.6472 14.7014 35.2986 6.35282 25 6.35282C14.7014 6.35282 6.35282 14.7014 6.35282 25Z" fill="url(#paint0_angular)"/>
                <path d="M31.6836 25.9082H21.5586V32.7637H33.4414V37H16.2852V11.4062H33.4062V15.6777H21.5586V21.7773H31.6836V25.9082Z" fill="url(#paint1_radial)"/>
                <defs>
                <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 25) rotate(90) scale(25)">
                <stop stop-color="#ED58DC"/>
                <stop offset="0.515625" stop-color="#975BFE"/>
                <stop class="stop-color" offset="1" stop-color="#6206FF" stop-opacity="0.3"/>
                </radialGradient>
                <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.5 25) rotate(90) scale(21 10.5)">
                <stop stop-color="#E458E0"/>
                <stop offset="1" stop-color="#AA7CF9"/>
                </radialGradient>
                </defs>
            </svg>
        </router-link>
        <div class="header__title">Gym</div>
        <div class="header__profile profile">
            <div class="profile__icon">
                <img src="@/components/header/header-img/prof-icon.png" alt="">
            </div>
            <div class="rofile__name">@user2021</div>
        </div>
        </div>
    </div>
</template>

    

<style scoped>
    .header{
        max-width: 100%;
        margin-bottom: 50px;
    }
    .header__container {
         display: flex;
        justify-content: space-between;
        align-items: center;
        height: 91px;
        border-bottom: 1px solid #ADADAD;
    }
    .header__title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -0.24px;
        padding-left: 70px;
    }
    .header__profile {
        align-items: center;
    }

    .rofile__name{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #975BFE;
        margin-left: 10px;
    }
    .profile {
        display: flex;
    }
   
</style>