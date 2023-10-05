<template>
    <div>
        <ul class="list-group">
            <MovieListItem v-for="movie,key in data" :movie="movie" :key="key" @socialEventItem="changeSocialItem"/>
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
    },

    methods: {
        changeSocialItem(data, event){
            this.$emit('socialEvent', data, event)
            // console.log(data, event)
        }
    },
}
</script>
<style>
    
</style>