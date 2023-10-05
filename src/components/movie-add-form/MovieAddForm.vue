<template>
    <div>
        <h4>Yangi kino qo'shish</h4>
        <form class="row" @submit.prevent>
            <div class="col-5" >
                <label for="staticEmail2" class="visually-hidden">Qanday kino...</label>
                <input v-model="name" type="text" class="form-control" id="staticEmail2" placeholder="Qanday kino...">
            </div>
            <div class="col-5">
                <label for="inputPassword2" class="visually-hidden">Necha marta ko'rilgan...</label>
                <input v-model="viewers" type="number" class="form-control" id="inputPassword2" placeholder="Necha marta ko'rilgan...">
            </div>
            <div class="col-2">
                <Button type="submit" @click="addMovie" class='btn-primary'>Qo'shish</Button>
            </div>
        </form>
    </div>
</template>
<script>
import Button from '@/ui-components/Button.vue';

export default {
    components:{
        Button
    },
    props: {

    },
    data(){
        return {
            name: "",
            viewers: 0,
        }
    },
    methods: {
        addMovie(){

            if(!this.name || !this.viewers) return false;

            const newMovie = {
                id: (new Date()).getTime(),
                name: this.name,
                viewers: this.viewers,
                like: false,
                favorite: false
            }

            this.$emit('createMovie', newMovie)

            this.name = ""
            this.viewers = 0
        }
    }
}
</script>
<style>
    
</style>