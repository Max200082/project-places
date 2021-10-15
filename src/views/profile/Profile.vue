<template>
    <div class="profile">
        <div class="profile__content">
            <div class="profile__acc">
                <div class="profile__icon">
                    <img src="@/views/profile/profile-img/profile-icon.png" alt="">
                </div>

                <div class="profile__body">
                    <div class="profile__name">@uni4red</div>
                    <div class="profile__about">
                        Organization of concerts of hip hop culture. Organization of concerts of 
                        hip hop culture.Organization of concerts of hip hop culture.
                    </div>
                </div>

            </div>
            <div class="profile__statistics statistics">
                <div class="statistics__row">
                    <div class="statistics__column">
                        <div class="statistics__value">0</div>
                        <div class="statistics__name">Events</div>
                    </div>
                    <div class="statistics__column">
                        <div class="statistics__value">0</div>
                        <div class="statistics__name">Followers</div>
                    </div>
                    <div class="statistics__column">
                        <div class="statistics__value">0</div>
                        <div class="statistics__name">Following</div>
                    </div>
                </div>
                <button class="statistics__button">Profile settings</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .profile {
        background: #FFFFFF;
        border-radius: 22px;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
        width: 100%;
    }

    .profile__content {
        display: flex;
        align-items: center;

        justify-content: space-between;
        padding: 20px;
    }

    .profile__acc {
        display: flex;
    }

    .profile__icon{

    }

    .profile__body {
        margin: 0px 0px 0px 20px;
        max-width: 334px;
    }

    .profile__name{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #650375;
    }

    .profile__about{
        margin-top: 21px;
        max-width: 334px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;

        color: #000000;
    }
    .profile__statistics {
        margin-left: 10px;
    }

    .statistics__row {
        display: flex;
        justify-content: space-between;
    }
    .statistics__column {
        text-align: center;
    }

    .statistics__value {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
    }

    .statistics__name {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #ADADAD;
    }

    .statistics__button {
        width: 235px;
        height: 30px;
        background: #650375;
        border-radius: 40px;
        margin-top: 26px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-align: center;

        color: #FFFFFF;
    }
    @media(max-width: 1060px) {
        .profile__content{
            flex-wrap: wrap;
        }
        .profile__acc {
            margin-bottom: 20px;
            align-items: center;
        }
        .profile__statistics {
            margin: 0 auto;
        }
    }
</style>