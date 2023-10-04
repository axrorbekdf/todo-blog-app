<template>
    <div>
        <input @input="setSearchKeyValue" v-model="key" class="form-control form-control-lg card-title" type="text" placeholder="Kinolarni qidirish...">
    </div>
</template>

<script>
    export default{
        data(){
            return {
                key: ''
            }
        },
        computed:{
            setSearchKeyValue(){
                this.$emit('setSearch', this.key)
            }
        }
    }
</script>

<style>

</style>