<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
            <li class="page-item" v-for="item in totalPage" :class="{'active': item == page}" :key="item">
            <a @click="changePageHandler(item)" class="page-link" href="#">{{item}}</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "Pagination",
    props: {
        totalPage:{
            type: Array,
            required: true
        },
        page:{
            type: Number,
            required: true
        }
    },

    methods: {
        changePageHandler(item){
            this.$emit('changePageHandler', item)
        }
    }
}
</script>
<style>
    
</style>