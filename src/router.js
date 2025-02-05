import { createRouter, createWebHistory } from 'vue-router';
import DownloadsView from './views/plugins/DownloadsView.vue';
import HomeView from "@/views/HomeView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/downloads', component: DownloadsView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
