import Vue from 'vue';
import router from './app.routes.js';
import Fragment from 'vue-fragment';

Vue.use(Fragment.Plugin);

new Vue({
  router
}).$mount('#app');
