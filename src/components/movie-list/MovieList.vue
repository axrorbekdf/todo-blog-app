<template>
    <div>
        <ul class="list-group">

            <MovieListItem v-for="movie,key in data" :movie="movie" :key="key"/>

        </ul>
    </div>
</template>
<script>
import MovieListItem from "@/components/movie-list-item/MovieListItem.vue"
export default {
    components:{
        MovieListItem
    },
    props: {
        data: {
            type: Array,
            required: true
        }
    }
}
</script>
<style>
    
</style>