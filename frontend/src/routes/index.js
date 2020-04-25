import Vue from 'vue';
import VueRouter from 'vue-router';
// modules
import main from '@/components/main.vue';
import chatRoom from '@/components/chatRoom.vue';
Vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: main
        },
        {
            path: '/chatRoom',
            name: 'chatRoom',
            component: chatRoom
        }
    ]
});
//# sourceMappingURL=index.js.map