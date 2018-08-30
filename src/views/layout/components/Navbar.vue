<template>
    <el-menu class="navbar" mode="horizontal">
        <i class="el-icon-d-arrow-left" @click="toggleSideBar"></i>

    </el-menu>
</template>

<script>
export default {
    data () {
        return {

        }
    },

    methods: {
        toggleSideBar () {
            this.$store.dispatch('toggleSideBar')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
