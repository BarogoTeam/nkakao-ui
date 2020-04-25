<template>
    <div class="app">
        <div class="sidebar">
            <div v-for="side of sideList" :key="side.id" class="sidebar-item" :style="side.style">
                <i class="sidebar-item-icon"/>
                <div class="sidebar-item-text">{{side.title}}</div>
            </div>
        </div>
        <div class="main">
            <div class="menubar">
            </div>
            <div class="content">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            sideList: [
                {id: 'user', title: 'user', style: {background:'#AAA'}},
                {id: 'chat', title: 'chatting', style: {background:'#FFF'}},
                {id: 'setting', title: 'setting', style: {background:'#AFA'}},
            ]
        })
    }
</script>