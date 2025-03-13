import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/HomeView.vue'; // Your existing home component
import PluginsView from './views/plugins/PluginsView.vue'; // The new PluginsView page

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/plugins',
        name: 'Plugins',
        component: PluginsView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
