import Vue from 'vue';
import VueRouter from 'vue-router';
// modules
import main from '@/components/main.vue';
import chatRoom from '@/components/chatRoom.vue';
import roomList from '@/components/roomList.vue';
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
        },
        {
            path: '/roomList',
            name: 'roomList',
            component: roomList
        }
    ]
});
//# sourceMappingURL=index.js.map