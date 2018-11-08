import Vue from 'vue';
import VueRouter from 'vue-router';
import CatalogComponent from '@/components/catalog.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'catalog', component: CatalogComponent }
]
const router = new VueRouter({
    routes,
    mode: 'hash'
});

export default router;