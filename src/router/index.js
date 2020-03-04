import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/components/User'
import Post from '@/components/Post'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    component: User
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  }
]

const router = new VueRouter({
  routes
})

export default router
