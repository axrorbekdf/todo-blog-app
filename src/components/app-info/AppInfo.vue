<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">Barcha kinolar: {{ allMovies }}</h1>
                <h4 class="card-subtitle mb-2 text-body-secondary">Favorite kinolar: {{ favoriteMovies }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            data:{
                type: Array,
                required: true
            }
        },
        computed:{
            allMovies(){
                return this.data.length;
            },

            favoriteMovies(){
                return this.data.filter(function(movie){
                    return movie.favorite;
                }).length;
            }
        }
    }
</script>

<style>
</style>