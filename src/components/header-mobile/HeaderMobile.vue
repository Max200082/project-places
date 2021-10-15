<template>
    <div class="header-mobile">
        <div class="header__container">
            <div class="header__body">
                <div class="header__icon-add">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#ADADAD"/>
                    </svg>
                </div>
                <div class="header__title">
                    Gym
                </div>
                <div class="header__icon-options">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8711 5.24936C17.7159 4.81084 17.4286 4.4312 17.0488 4.16269C16.6689 3.89418 16.2152 3.75 15.75 3.75C15.2848 3.75 14.8311 3.89418 14.4512 4.16269C14.0714 4.4312 13.7841 4.81084 13.6289 5.24936H2.25V6.74936H13.6289C13.7841 7.18788 14.0714 7.56752 14.4512 7.83603C14.8311 8.10454 15.2848 8.24872 15.75 8.24872C16.2152 8.24872 16.6689 8.10454 17.0488 7.83603C17.4286 7.56752 17.7159 7.18788 17.8711 6.74936H21.75V5.24936H17.8711Z" fill="#ADADAD"/>
                        <path d="M8.25 9.75C7.78489 9.75066 7.33138 9.89517 6.95164 10.1637C6.5719 10.4323 6.28452 10.8117 6.1289 11.25H2.25V12.75H6.1289C6.28409 13.1885 6.57139 13.5682 6.95124 13.8367C7.33109 14.1052 7.78483 14.2494 8.25 14.2494C8.71517 14.2494 9.16891 14.1052 9.54876 13.8367C9.92861 13.5682 10.2159 13.1885 10.3711 12.75H21.75V11.25H10.3711C10.2155 10.8117 9.9281 10.4323 9.54836 10.1637C9.16861 9.89517 8.7151 9.75066 8.25 9.75Z" fill="#ADADAD"/>
                        <path d="M15.75 15.749C15.2849 15.7497 14.8314 15.8942 14.4516 16.1627C14.0719 16.4313 13.7845 16.8107 13.6289 17.249H2.25V18.749H13.6289C13.7841 19.1875 14.0714 19.5672 14.4512 19.8357C14.8311 20.1042 15.2848 20.2484 15.75 20.2484C16.2152 20.2484 16.6689 20.1042 17.0488 19.8357C17.4286 19.5672 17.7159 19.1875 17.8711 18.749H21.75V17.249H17.8711C17.7155 16.8107 17.4281 16.4313 17.0484 16.1627C16.6686 15.8942 16.2151 15.7497 15.75 15.749Z" fill="#ADADAD"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .header-mobile {
        max-width: 100%;
        margin-bottom: 10px;
        border-bottom: 1px solid #DDDDDD;
    }
    .header__container {
        max-width: 470px;
        padding: 0px 15px;
        margin: 0 auto;
        
    }
    .header__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 65px 0px 7px 0px;
    }
    .header__icon-add svg {
        width: 100%;
    }
    .header__title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
    }
    .header__icon-options {
    }
</style>