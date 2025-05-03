import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/HomeView.vue';
import PluginsView from './views/plugins/PluginsView.vue';
import PythonView from "./views/PythonView.vue";
import ToolsView from "./views/ToolsView.vue";
import NotFound from './views/NotFound.vue';

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
    },
    {
        path: '/python',
        name: 'Python',
        component: PythonView
    },
    {
        path: '/tools',
        name: 'Tools',
        component: ToolsView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: { hideHeader: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
