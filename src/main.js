import Vue from 'vue';
import router from '@/router';
import App from './app.vue';


import './index.html';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})


