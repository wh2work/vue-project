<template>
    <el-menu class="navbar" mode="horizontal">
        <div class="toggle-btn" @click="toggleSideBar">
            <i class="fa fa-exchange-alt"></i>
        </div>

        <div class="left-menu"></div>
        <div class="right-menu">
            <!-- <error-log class="errLog-container right-menu-item"/> -->
            <el-dropdown class="avatar-container right-menu-item" trigger="click">
                <div class="avatar-wrapper">
                    <i class="el-icon-caret-bottom"/>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                    <span style="display:block;" @click="logout">登出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {

        }
    },

    computed: {
        ...mapGetters([
            'name',
            'avatar'
        ])
    },

    methods: {

        toggleSideBar () {
            this.$store.dispatch('toggleSideBar')
        },

        logout () {
            this.$store.dispatch('LogOut').then(() => {
                location.reload()// In order to re-instantiate the vue-router object to avoid bugs
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    border-radius: 0!important;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 3px 5px;
    outline: none;
    .toggle-btn:focus {
        outline: none;
    }
    .left-menu {
        &:focus {
            outline: none
        }
        flex: 1;
    }

    .right-menu {
        height: 100%;
        &:focus {
            outline: none
        }
        .avatar-wrapper {
            height: 50px;
            padding: 5px;
                img {
                width: 40px;
                height: 40px;
                border-radius: 30%;
            }
        }
    }
}
</style>
