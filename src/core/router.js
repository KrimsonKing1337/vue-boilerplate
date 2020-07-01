import Vue from 'vue';
import VueRouter from 'vue-router';
import About from 'views/About';
import Main from 'views/Main';
import Err404 from 'views/Err404';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: Err404
    },
    {
      path: '/',
      component: Main
    },
    {
      path: '/about',
      component: About
    }
  ]
});
