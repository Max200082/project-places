import { createRouter, createWebHistory } from 'vue-router'
import HomeAuth from '../views/auth/home-auth'
import {AUTH_URL, ERROR_URL, MAIN_URL, FEED_URL,PROFILE_URL,ADDPOST_URL, MAP__URL, LOGIN_URL, REGISTRATION_URL} from "../utils/consts";


const routes = [
  
  {
    path: MAIN_URL,
    name: 'main',
    component: () => import('../views/main/Main'),
    meta: {layout: 'main'},
    children: [
      {
        path: FEED_URL,
        name: 'feed',
        component: () => import('../views/feed/home-feed'),
        meta: {layout: 'main'}
      },
      {
        path: PROFILE_URL,
        name: 'profile',
        component: () => import('../views/profile/Profile'),
        meta: {layout: 'main'}
      },
      {
        path: ADDPOST_URL,
        name: 'addpost',
        component: () => import('../views/add-post/AddPost'),
        meta: {layout: 'main'}
      },
      {
        path: MAP__URL,
        name: 'map',
        component: () => import('../views/map/Map'),
        meta: {layout: 'main'}
      }
    ]
  },
  // {
  //   path: FEED_URL,
  //   name: 'feed',
  //   component: () => import('../views/feed/home-feed'),
  //   meta: {layout: 'main'}
  // },
  {
    path: AUTH_URL,
    name: 'home-auth',
    component: HomeAuth
  },
  {
    path: LOGIN_URL,
    name: 'login-auth',
    component: () => import('../views/auth/login-auth')
  },
  {
    path: LOGIN_URL + ERROR_URL,
    name: 'login error',
    component: () => import('../views/auth/bad-credentials-auth')
  },
  {
    path: REGISTRATION_URL,
    name: 'registration',
    component: () => import('../views/auth/registration-auth')
  },
    // редиректы
  {
    path: AUTH_URL + LOGIN_URL,
    redirect: LOGIN_URL,
  },
  {
    path: AUTH_URL + REGISTRATION_URL,
    redirect: REGISTRATION_URL,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
