import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '@/components/List.vue';
import Contact from '@/components/Contact.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: List },
    { path: '/contacts', component: Contact },
  ],
});

export default router;
