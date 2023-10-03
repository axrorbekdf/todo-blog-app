<template>
    <div>
        <li class="list-group-item d-flex justify-content-between align-items-center" :class="[movie.favorite ? favoriteClass:'']">
            <div class="col-6"><strong>{{ movie.name }}</strong></div>
            <div class="col-6 d-flex justify-content-between">
                <div>
                    <div class="col-6" >
                        <input :class="[movie.favorite ? favoriteClass:'']" :value="movie.viewers" type="number" class="form-control border-0">
                    </div>
                </div>
                <div>
                    <button :class="[movie.favorite ? favoriteClass:blueClass]" class="btn btn-default btn-sm btn-cookie">
                        <i class="fa fa-cookie"></i>
                    </button>
                    <button class="btn btn-default btn-sm btn-trash">
                        <i class="fa fa-trash"></i>
                    </button>
                    <button class="btn btn-default btn-sm btn-start">
                        <i :class="[movie.like ? favoriteClass:redClass]" class="fa fa-star"></i>
                    </button>
                </div>
            </div>
        </li>
    </div>
</template>
<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            redClass: 'red',
            favoriteClass: 'favorite',
            blueClass: 'blue'
        }
    }
}
</script>
<style>
    .favorite{
        color: orange;
    }

    .red{
        color: red;
    }

    .blue{
        color: lightskyblue;
    }
</style>