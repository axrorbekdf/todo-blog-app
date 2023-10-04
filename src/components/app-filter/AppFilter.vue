<template>
    <div class="btn-group">
        <button type="button" @click="setFilterKeyValue('all')" class="btn btn-sm" :class="[filterName=='all' ? 'btn-primary':'btn-outline-primary']">Barchasi kinolar</button>
        <button type="button" @click="setFilterKeyValue('popular')" class="btn btn-sm" :class="[filterName=='popular' ? 'btn-primary':'btn-outline-primary']">Mashhur kinolar</button>
        <button type="button" @click="setFilterKeyValue('mostViewers')" class="btn btn-sm" :class="[filterName=='mostViewers' ? 'btn-primary':'btn-outline-primary']">Eng ko'p ko'rilgan kinolar</button>
    </div>
</template>
<script>
export default {
    props:{
        filterName: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            filter: 'all'
        }
    },
    methods: {
        setFilterKeyValue(filter){
            this.filter = filter
            this.$emit('setFilter', this.filter)
        }
    }
}
</script>
<style>
    
</style>