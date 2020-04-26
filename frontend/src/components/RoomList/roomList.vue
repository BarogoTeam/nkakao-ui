<template>
    <main class="chats">
        <ul class="chats__list">
            <li class="chats__chat" v-for="item in list" v-bind:key="item.id">
                <a>
                    <div class="chat__content">
                        <img src="favicon.ico">
                        <div class="chat__privew">
                            <h3 class="chat__user">
                                {{item.userName}}
                            </h3>
                            <span class="chat__last-message">
                            {{item.lastMessage}}
                        </span>

                        </div>
                    </div>
                    <span class="chat__date-time">
                    {{item.date}}
                </span>
                </a>
            </li>
        </ul>
    </main>
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