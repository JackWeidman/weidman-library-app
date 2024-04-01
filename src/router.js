import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/bookshelf'},
        { name: 'bookshelf',
    path: '/bookshelf',
component: {default: App}}
    ]
});
export default router;