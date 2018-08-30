<template>
    <div class="app-wraper">
        <sidebar class="sidebar-container" />

        <div class="mian-container">
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
    components: {Navbar, Sidebar, AppMain, TagsView},
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.app-wraper {
    display: flex;

}
</style>
