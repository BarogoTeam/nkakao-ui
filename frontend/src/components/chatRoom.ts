import Vue from 'vue'
// import {Component} from 'vue-property-decorator'
import axios from 'axios'

window.Vue = require('vue');

new Vue({
    el: '#chatRoom',
    data: {
        MessageList: [
            {id:'1', userId:'user1', date:'0328', msg:'안녕 나는 유저1이야'},
            {id:'2', userId:'user2', date:'0330', msg:'나는 유저2야'}
        ]
    }
})

export interface Message {
    id: string;
    userId: string;
    date: string;
    msg: string;
}

// @Component
// export default class MessageList extends Vue {
//     messages: Array<Message> = []
//     temp1: Message = {id:'1', userId:'user1', date:'20200222145510', msg:'안녕 나는 유저1'}
//     temp2: Message = {id:'2', userId:'user2', date:'20200222145520', msg:'나는 유저2야'}
//
//     created(): void{
//         //this.asyncData();
//         this.messages.push(this.temp1);
//         this.messages.push(this.temp1);
//     }
//
//     asyncData(): void {
//         axios.get('/msg/1')
//             .then(({data: messages}) => {
//                 this.messages = messages as Array<Message>
//             })
//     }
//
//     setMessageClass(msgUserID: string): string {
//         return msgUserID === 'user1' ? 'chat__message chat__message-from-me' : 'chat__message chat__message-to-me'
//     }
//
// }