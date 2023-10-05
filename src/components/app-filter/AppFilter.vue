<template>
    <div class="btn-group">
        <Button type="button" @click="setFilterKeyValue('all')" :class="[filterName=='all' ? 'btn-primary':'btn-outline-primary']">Barchasi kinolar</Button>
        <Button type="button" @click="setFilterKeyValue('popular')" :class="[filterName=='popular' ? 'btn-primary':'btn-outline-primary']">Mashhur kinolar</Button>
        <Button type="button" @click="setFilterKeyValue('mostViewers')" :class="[filterName=='mostViewers' ? 'btn-primary':'btn-outline-primary']">Eng ko'p ko'rilgan kinolar</Button>
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