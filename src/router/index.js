import Vue from 'vue'
import Router from 'vue-router'
import Login from '../containers/Login.vue'
import Home from '../containers/Home.vue'
import Signup from '../containers/Signup.vue'
import Signin from '../containers/Signin.vue'
import Bookrack from '../containers/Bookrack.vue'
import Idea from '../containers/Idea.vue'
import Setme from '../containers/Setme.vue'
import Findlist from '../containers/Findlist.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:Login
    },
    {
      path: '/home',
      name: 'home',
      component:Home
    },
    {
      path: '/signup',
      name: 'signup',
      component:Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component:Signin
    },
    {
      path: '/findlist',
      name: 'findlist',
      component:Findlist,
    },
    {
      path: '/bookrack',
      name: 'bookrack',
      component:Bookrack,
    },
    {
      path: '/idea',
      name: 'idea',
      component:Idea,
    },
    {
      path: '/setme',
      name: 'setme',
      component:Setme,
    }
  ]
})
