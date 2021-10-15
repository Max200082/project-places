<template>
    <div class="menu-mobile">
        <div class="menu-mobile__container">
            <div class="menu-mobile__body">
                <router-link class="menu-mobile__item" tag="h1" to='/feed' v-model="feed">
                    <div class="menu-mobile__icon">
                        <svg 
                        width="24" 
                        height="18" 
                        viewBox="0 0 24 18" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17.5C6.72386 17.5 6.5 17.2761 6.5 17V1C6.5 0.723858 6.72386 0.5 7 0.5H17C17.2761 
                        0.5 17.5 0.723857 17.5 1V17C17.5 17.2761 17.2761 17.5 17 17.5H7ZM1 15.1C0.723857 15.1 0.5 14.8761 
                        0.5 14.6V3.4C0.5 3.12386 0.723857 2.9 0.999999 2.9H3.8C4.07614 2.9 4.3 3.12386 4.3 3.4V14.6C4.3 
                        14.8761 4.07614 15.1 3.8 15.1H1ZM19.7 3.4C19.7 3.12386 19.9239 2.9 20.2 2.9H23C23.2761 2.9 23.5 
                        3.12386 23.5 3.4V14.6C23.5 14.8761 23.2761 15.1 23 15.1H20.2C19.9239 15.1 19.7 14.8761 19.7 14.6V3.4Z" />
                        </svg>
                    </div>
                </router-link>
                <router-link class="menu-mobile__item" tag="h1" to="/map">
                    <div class="menu-mobile__icon">
                        <svg
                        width="21" 
                        height="21" 
                        viewBox="0 0 21 21" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1157 4.50063L7.8843 1.15403C7.67621 1.0501 7.44631 0.997324 7.21371 1.0001C6.98112 1.00288 6.75255 
                            1.06114 6.54699 1.17002L1.38868 4.63078C1.27132 4.69295 1.17313 4.78591 1.10465 4.89969C1.03617 5.01346 0.999988 
                            5.14375 1 5.27654V18.7853C0.999989 18.9113 1.03257 19.0352 1.09458 19.1449C1.15659 19.2546 1.24592 19.3464 1.35389 
                            19.4114C1.46186 19.4764 1.58481 19.5124 1.71079 19.5158C1.83677 19.5192 1.9615 19.4901 2.07286 19.4311L6.5406 16.5179C6.74783 
                            16.4081 6.97843 16.3498 7.21294 16.3479C7.44745 16.346 7.67897 16.4005 7.88796 16.5069L12.9969 19.8407C13.2041 19.9463 13.4335 
                            20.0009 13.666 20C13.8985 19.9991 14.1274 19.9428 14.3338 19.8357L19.6058 16.3676C19.7246 16.306 19.8242 16.2129 19.8937 
                            16.0985C19.9632 15.9842 20 15.8529 20 15.7191V2.214C20 2.08799 19.9674 1.96411 19.9054 1.85441C19.8434 1.74471 19.7541 1.6529 19.6461 
                            1.58791C19.5381 1.52292 19.4152 1.48696 19.2892 1.48351C19.1632 1.48007 19.0385 1.50926 18.9271 1.56825L14.4512 4.48464C14.2459 4.59322 
                            14.0176 4.65131 13.7854 4.65409C13.5531 4.65687 13.3236 4.60426 13.1157 4.50063Z" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"/>
                        <path  class="map-svg"
                            d="M13.7876 4.6543V19.9989" 
                            stroke = '#ADADAD'
                            stroke-linecap="round" 
                            stroke-linejoin="round"
                        />
                        <path class="map-svg"
                            d="M7.21094 1V16.3446" 
                            stroke =  '#ADADAD'
                            stroke-linecap="round" 
                            stroke-linejoin="round"
                        />
                        </svg>
                    </div>
                </router-link>
                <router-link class="menu-mobile__item" tag="h1" to="#">
                    <div class="menu-mobile__icon">
                        <svg 
                        width="20" 
                        height="18" 
                        viewBox="0 0 20 18" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5436 0.75C11.5005 0.75 10.0005 3.75 10.0005 3.75C10.0005 3.75 8.50048 0.75 5.45735 0.75C2.98423 0.75 1.02579 2.81906 1.00048 
                        5.28797C0.948917 10.4128 5.06595 14.0573 9.5786 17.1201C9.70301 17.2048 9.85 17.25 10.0005 17.25C10.1509 17.25 10.2979 17.2048 10.4224 
                        17.1201C14.9345 14.0573 19.0516 10.4128 19.0005 5.28797C18.9752 2.81906 17.0167 0.75 14.5436 0.75Z" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                        </svg>
                    </div>
                </router-link>
                <router-link class="menu-mobile__item" tag="h1" to="/profile">
                    <div class="menu-mobile__icon">
                        <svg 
                        width="20" 
                        height="22" 
                        viewBox="0 0 20 22" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.125 5.74902C13.9413 8.2273 12.0625 10.249 10 10.249C7.93754 10.249 6.05551 8.22777 
                        5.87504 5.74902C5.68754 3.1709 7.51566 1.24902 10 1.24902C12.4844 1.24902 14.3125 3.21777 14.125 
                        5.74902Z"  
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                        <path d="M10.0001 13.25C5.92199 13.25 1.78293 15.5 1.01699 19.7469C0.924645 20.2587 1.21433 20.75 
                        1.75011 20.75H18.2501C18.7864 20.75 19.076 20.2587 18.9837 19.7469C18.2173 15.5 14.0782 13.25 10.0001 13.25Z" 
                        stroke-miterlimit="10"/>
                        </svg>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .menu-mobile {
        width: 100%;
        background: white;
        border: 1px solid #DDDDDD;
    }
    .menu-mobile__container {
        max-width: 338px;
        padding: 0px 15px;
        margin: 0 auto;
        
    }
    .menu-mobile__body {
        padding: 25px 0px;
        display: flex;
        justify-content: space-between;
    }
    .nav__item {
        
    }
    .menu-mobile__icon {
    }
    .menu-mobile__item {
        
    }
    .map-svg {
    }
     .menu-mobile__item:hover svg {
        fill: black;
        stroke: black;
        /* transition: all .6s ease; */
    }
    svg {
        width: 24px;
        stroke: #ADADAD;
    }
</style>