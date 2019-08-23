import Vue from 'vue';
import VueRouter from 'vue-router';
import About from 'pages/About';
import Main from 'pages/Main';
import Err404 from 'pages/Err404';

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
