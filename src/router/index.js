import {routes} from './routes.js';
import {createRouter, createWebHistory} from 'vue-router';
import {auth} from '../firebase';


const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
});

if (import.meta.hot) {
  let removeRoutes = [];

  for (const route of routes) {
    removeRoutes.push(router.addRoute(route));
  }

  import.meta.hot.accept('./routes.js', ({routes}) => {
    for (const removeRoute of removeRoutes) removeRoute();
    removeRoutes = [];
    for (const route of routes) {
      removeRoutes.push(router.addRoute(route));
    }
    router.replace('');
  });
}

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    console.log('there is a current user but it is login');
    next('/dashboard');
    return;
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!auth.currentUser) {
      next({
        path: '/login',
        query: {redirect: to.fullPath},
      });
    } else {
      next();
    }
    return;
  }

  next();
});

export default router;
