import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/HomeView.vue'; // Your existing home component
import Downloads from '../src/views/plugins/DownloadsView.vue'; // The new Downloads page

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/downloads',
        name: 'Downloads',
        component: Downloads
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
