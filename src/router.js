import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';

import About from './pages/About.vue';

import Projects from './pages/Projects.vue';

import Contacts from './pages/Contacts.vue';

import Error404 from './pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/about',
      name: 'About',
      component:About
    },
    {
      path: '/projects',
      name: 'Projects',
      component:Projects
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component:Contacts
    },

    {
      path: '/:pathMatch(.*)*',
      component:Error404
    }
  ]
})

export { router}