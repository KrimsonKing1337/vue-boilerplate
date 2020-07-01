import Vue from 'vue';
import router from './router.js';
import Fragment from 'vue-fragment';
import './styles/styles.scss';

Vue.use(Fragment.Plugin);

new Vue({
  router
}).$mount('#app');
