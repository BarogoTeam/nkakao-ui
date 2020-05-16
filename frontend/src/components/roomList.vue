<template>
    <body>
    <header class= "top-header">
        <div class="header__top">
            <div class="header__column">
                <i class="fas fa-plane"></i>
                <i class="fas fa-wifi"></i>
            </div>
            <div class="header__column">
                <span class="header_time">11:24</span>
            </div>
            <div class="header__column">
                <i class="fas fa-moon"></i>
                <i class="fab fa-bluetooth-b"></i>
                <span class="header_bettery">111% <i class="fas fa-battery-full"></i> </span>
            </div>
        </div>
        <div class="header__bottom">
            <div class="header__column">
                <span class="header__text">편집</span>
            </div>
            <div class="header__column">
                <span class="header__text">채팅</span>

            </div>
            <div class="header__column">
                <i class="fa fa-cog fa-lg"></i>
            </div>
        </div> <!-- 상단 헤더 섹션 -->
    </header>
    <main class="chats">
        <div class="search-bar">

            <input type="text" placeholder="검색">
        </div> <!-- 검색 섹션 -->
        <ul class="chats__list">
            <li class="chats__chat" v-for="item in list" v-bind:key="item.id">
                <a href="chat.html">
                    <div class="chat__content">
                        <img src="images/kakao_friends.png"/>
                        <div class="chat__privew">
                            <h3 class="chat__user">{{item.userName}}</h3>
                            <span class="chat__last-message">{{item.lastMessage}}</span>
                        </div>
                    </div>
                    <span class="chat__date-time">{{item.date}}</span>
                </a>
            </li>
        </ul>
        <div class="chat-btn">
            <i class="fas fa-comment"></i>
        </div>
    </main>
    <nav class="tab-bar">
        <a href="" class="tab-bar__tab">
            <i class="fa fa-user"></i>
            <span class="tab-bar__title">친구</span>
        </a>

        <a href="roomList" class="tab-bar__tab tab-bar__tab--selected">
            <i class="fas fa-comment"></i>
            <span class="tab-bar__title">채팅</span>
        </a>

        <a href="channel.html" class="tab-bar__tab">
            <i class="fa fa-search"></i>
            <span class="tab-bar__title">채널</span>
        </a>

        <a href="more.html" class="tab-bar__tab">
            <i class="fa fa-ellipsis-h"></i>
            <span class="tab-bar__title">더보기</span>
        </a>
    </nav>
    </body>
</template>

<script>
    export default {
        name: "roomList",
        data() {
            return {
                list: []
            }
        },
        beforeCreate() {
            console.log("beforeCreate");
        },
        created() {
            console.log("created");
            this.list = [
                {
                    id: 1,
                    userName: "희준",
                    date: "12:23",
                    lastMessage: "ㅎㅇ"
                },
                {
                    id: 2,
                    userName: "태선",
                    date: "12:23",
                    lastMessage: "ㅇㅇ"
                },
                {
                    id: 3,
                    userName: "민지",
                    date: "12:23",
                    lastMessage: "ㅂㅇ"
                }
            ]
        },
        beforeMount() {
            console.log("beforeMount");
        },
        mounted() {
            console.log("mounted");
        },
        beforeUpdate() {
            console.log("beforeUpdate");
        },
        updated() {
            console.log("updated");
        },
        beforeDestroy() {
            console.log("beforeDestroy");
        },
        destroyed() {
            console.log("destroyed");
        }
    }
</script>

<style scoped>

</style>