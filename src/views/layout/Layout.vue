<template>
    <div class="app-wraper">
        <sidebar class="sidebar-container" />

        <div class="main-container">
            <navbar />
            <tags-view/>
            <app-main />
        </div>
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './components'

export default {
    name: 'Layout',
    components: { Navbar, Sidebar, AppMain, TagsView },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.app-wraper {
    display: flex;

    .sidebar-container {
        height: 100vh;
    }

    .main-container {
        width: 100%;
    }
}
</style>
