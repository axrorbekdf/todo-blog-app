<template>
    <Input @input="setSearchKeyValue" v-model="key" class="form-control form-control-lg card-title" placeholder="Kinolarni qidirish..." />
</template>

<script>

export default{
    data() {
        return {
            key: ''
        };
    },
    computed: {
        setSearchKeyValue() {
            this.$emit('setSearch', this.key);
        }
    }
}
</script>

<style>

</style>