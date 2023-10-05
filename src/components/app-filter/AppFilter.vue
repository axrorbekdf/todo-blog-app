<template>
    <div class="btn-group">
        <Button type="button" @click="setFilterKeyValue('all')" :class="[filterName=='all' ? 'btn-primary':'btn-outline-primary']">Barchasi kinolar</Button>
        
        <button type="button" @click="setFilterKeyValue('popular')" class="btn btn-sm" :class="[filterName=='popular' ? 'btn-primary':'btn-outline-primary']">Mashhur kinolar</button>
        <button type="button" @click="setFilterKeyValue('mostViewers')" class="btn btn-sm" :class="[filterName=='mostViewers' ? 'btn-primary':'btn-outline-primary']">Eng ko'p ko'rilgan kinolar</button>
    </div>
</template>
<script>
import Button from '@/ui-components/Button.vue'

export default {
    components:{
        Button
    },
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