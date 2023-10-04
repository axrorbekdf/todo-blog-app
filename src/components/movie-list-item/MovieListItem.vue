<template>
    <div>
        <li :class="[movie.favorite ? favoriteClass:'']" class="list-group-item d-flex justify-content-between align-items-center">
            <div class="col-6" @click="socialEvenChange('like')"><strong>{{ movie.name }}</strong></div>
            <div class="col-6 d-flex justify-content-evenly">
                <div>
                    <div class="col-6">
                        <input :class="[movie.favorite ? favoriteClass:'']" :value="movie.viewers" type="number" class="form-control border-0">
                    </div>
                </div>
                <div>
                    <button :class="[movie.favorite ? favoriteClass:blueClass]" @click="socialEvenChange('favorite')" class="btn btn-default btn-sm btn-cookie">
                        <i class="fa fa-cookie"></i>
                    </button>
                    <button class="btn btn-default btn-sm btn-trash" @click="socialEvenChange('delete')">
                        <i class="fa fa-trash" :class="[redClass]"></i>
                    </button>
                    <button class="btn btn-default btn-sm btn-start">
                        <i :class="[movie.like ? [favoriteClass,'d-block']:['d-none'], ]" class="fa fa-star"></i>
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
    },
    methods: {
        socialEvenChange(event){
            this.$emit('socialEventItem', this.movie, event)
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