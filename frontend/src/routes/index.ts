import Vue from 'vue'
import VueRouter from 'vue-router'

// modules
import Index from '@/components/TestPage.vue';
import chatRoom from '@/components/chatRoom.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/chatRoom',
            name: 'chatRoom',
            component: chatRoom
        }
    ]
})
