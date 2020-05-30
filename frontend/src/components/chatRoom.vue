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
        <div v-for="message of messageList" :key="message.id">
            <div class="chat__message chat__message-from-me" v-if="message.userid == currentUserid">
                <span class="chat__message-time">{{message.date}}</span>
                <span class="chat__message-body">{{message.msg}}</span>
            </div>
            <div class="chat__message chat__message-to-me" v-else>
                <img src="images/kakao_friends.png" class="chat__message-avaatar">
                <div class="chat__message-center">
                    <h3 class="chat__message-username">{{message.userid}}</h3>
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
            currentUserid : 'user2', // TODO 현재 접속자id 받아오도록 수정하기
            messageList: [
                {id:'1', userid:'user1', date:'0328', msg:'안녕 나는 유저1이야'},
                {id:'2', userid:'user2', date:'0330', msg:'나는 유저2야'}
            ],
            inputMsg : "",
            msgObj : {},
            lastCount : 0,
            result : null
        }),
        computed : {
        },
        mounted : function () {
            this.getAllMsg();
            this.updateMsg();
        },
        methods : {
            getAllMsg() {
                let roomid = 1; // TODO 채팅방리스트에서 넘어올 때 roomid 받아오게 수정하기
                let url = 'http://localhost:3000/api/msg/' + roomid;
                axios.get(url).then(response => {
                    this.messageList = response.data.messageList || [];
                })
            },
            getLatestMsg() {
                let roomid = 1; // TODO 채팅방리스트에서 넘어올 때 roomid 받아오게 수정하기
                let lastCount = this.messageList.length;
                let url = 'http://localhost:3000/api/msg/' + roomid + '/' + lastCount;
                axios.get(url).then(response => {
                    this.messageList = this.messageList.concat(response.data.messageList || []);
                })
            },
            updateMsg() {
                setInterval(()=>{
                    this.getLatestMsg();
                }, 3000);
            },
            singleUpdateMsg() {
                this.getLatestMsg();
            },
            sendMsg() {
                //this.singleUpdateMsg();
                this.msgObj = {
                    roomid: 1,
                    userid: this.currentUserid,
                    date: '0516',
                    msg: this.inputMsg
                };
                this.messageList.push(this.msgObj);
                 // TODO 채팅방리스트에서 넘어올 때 roomid 받아오게 수정하기
                let url = 'http://localhost:3000/api/msg/send' ;
                axios.post(url, this.msgObj).then(response => {
                    this.messageList = this.messageList.concat(response.data.messageList || []);
                })
                this.inputMsg = "";
            }
        }
    }
</script>