<template>
    <div>
        <ul class="list-group">

            <MovieListItem/>
            <MovieListItem/>
            <MovieListItem/>
            <MovieListItem/>
            <MovieListItem/>

        </ul>
    </div>
</template>
<script>
import MovieListItem from "@/components/movie-list-item/MovieListItem.vue"
export default {
    components:{
        MovieListItem
    }
}
</script>
<style>
    
</style>