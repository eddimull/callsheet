import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import store from '../store';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {path: '/', component: Home, meta: {title: 'Home'}},
  {path: '/about', component: About, meta: {title: 'About'}},
  {path: '/dashboard', component: ()=> import('../views/Dashboard.vue'), meta: {
    requiresAuth: true,
  }},
  {path: '/login', component: ()=> import('../views/Login.vue'), meta: {
    requiresAuth: false,
  }},
  {
    name: 'logout',
    path: '/logout',
    beforeEnter: (to, from, next)=>{
      store.dispatch('logout');
    },
  },
  {path: '/:path(.*)', component: NotFound},
];
