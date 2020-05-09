<template>
    <div class="app">
        <div class="sidebar">
            <div v-for="side of sideList" :key="side.id" class="sidebar-item" :style="side.style">
                <i :class="side.class" class="sidebar-item-icon"/>
                <div class="sidebar-item-text">{{side.title}}</div>
            </div>
        </div>
        <div class="main">
            <div class="menubar">
                <div class="menu-tool-list">
                    <i class="menu-tool-item fa fa-times"/>
                    <i class="menu-tool-item fa fa-window-maximize"/>
                    <i class="menu-tool-item fa fa-window-minimize"/>
                </div>
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
                {id: 'user', title: 'user', class: 'fa fa-user', style: {background:'#AAA'}},
                {id: 'chat', title: 'chatting', class: 'fa fa-comment', style: {background:'#FFF'}},
                {id: 'setting', title: 'setting', class: 'fa fa-search', style: {background:'#AFA'}},
            ]
        })
    }
</script>