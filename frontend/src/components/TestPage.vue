<template>
    <div class="wrap">
        <h1>5월 마지막주 영화 예매 순위</h1>
        <ul class="movies">
            <li v-for="movie in movies" class="item" v-bind:key="movie.id">
                <span class="rank">{{movie.id}}</span>
                <router-link :to="{ name: 'show', params: { id: movie.id }}">
                    <img v-bind:src="movie.poster" class="poster">
                </router-link>
                <div class="detail">
                    <strong class="tit">{{movie.name}}</strong>
                    <span class="rate">예매율 <span class="num">{{movie.rate}}</span></span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        created () {
            // 컴포넌트가 생성될 때, /api/movies에 요청을 보냅니다.
            this.$http.get('/v1/test')
                .then((response) => {
                    this.movies = response.data
                })
        },
        data () {
            return {
                movies: []
            }
        }
    }
</script>