<template>
    <input type="text" :value="modelValue" @input="updateInput">
</template>
<script>
export default {
    name: "Input",
    props:{
        modelValue: [String, Number]
    },
    methods:{
        updateInput(e){
            this.$emit('update:model-value', e.target.value)
        }
    }
}
</script>
<style>
    
</style>