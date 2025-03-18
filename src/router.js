import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/HomeView.vue';
import PluginsView from './views/plugins/PluginsView.vue';
import PythonView from "./views/PythonView.vue";
import ToolsView from "./views/ToolsView.vue";

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
