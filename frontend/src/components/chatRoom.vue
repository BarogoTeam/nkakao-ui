<template>
    <body class="body-chat">
    <header class= "top-header chat-header">
        <div class="header__top">
            <div class="header__column">
                <i class="fas fa-plane"></i>
                <i class="fas fa-wifi"></i>
            </div>
        </div>
        <div class="header__bottom">
            <div class="header__column">
                <a href="chats.html">
                    <i class="fa fa-chevron-left fa-lg"></i>
                </a>
            </div>
            <div class="header__column">
                <span class="header__text">유정</span>
            </div>
            <div class="header__column">
                <i class="fa fa-search"></i>
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
    <main class="chat" id="chatRoom">
        <div class="date-divider">
            <span class="date-divider__text">화요일, 2018년 6월 19일</span>
        </div>
        <div v-for="message of MessageList" :key="message.messageId">
            <div class="chat__message chat__message-from-me" v-if="message.userId == 'user1'">
                <span class="chat__message-time">{{message.date}}</span>
                <span class="chat__message-body">{{message.msg}}</span>
            </div>
            <div class="chat__message chat__message-to-me" v-else>
                <img src="images/kakao_friends.png" class="chat__message-avaatar">
                <div class="chat__message-center">
                    <h3 class="chat__message-username">{{message.userId}}</h3>
                    <span class="chat__message-body">{{message.msg}}</span>
                </div>
                <span class="chat__message-time">{{message.date}}</span>
            </div>
        </div>
    </main>
    <div class="type-message">
        <i class="fa fa-plus "></i>
        <div class="type-message__input">
            <input type="text" v-model="inputMsg" v-on:keyup.enter="sendMsg">
            <i class="fa fa-smile-o"></i>
            <span class="record-message" @click="sendMsg">
        <i class="fa fa-microphone"></i>
      </span>
        </div>
    </div>
    </body>
</template>

<script>
    import axios from 'axios';
    export default {
        data: () => ({
            MessageList: [
                {id:'1', userId:'user1', date:'0328', msg:'안녕 나는 유저1이야'},
                {id:'2', userId:'user2', date:'0330', msg:'나는 유저2야'}
            ],
            inputMsg : "",
            msgObj : {},
            result : null
        }),
        computed : {
        },
        mounted : function () {
            this.updateMsg()
        },
        methods : {
            requestMsg() {
                axios.get("www.naver.com").then(response => {
                    this.msgObj = {
                        id: '2',
                        userId: response.data.userId,
                        date: response.data.date,
                        msg: response.data.msg
                    };
                    this.MessageList.push(this.msgObj);
                })
            },
            updateMsg() {
                setInterval(()=>{
                    this.requestMsg();
                }, 3000);
            },
            singleUpdateMsg() {
                this.requestMsg();
            },
            sendMsg() {
                this.singleUpdateMsg();
                this.msgObj = {
                    id: '1',
                    userId: 'user1',
                    date: '0231',
                    msg: this.inputMsg
                };
                this.MessageList.push(this.msgObj);
                this.inputMsg = "";
            }
        }
    }
</script>