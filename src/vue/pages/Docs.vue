<template>
    <div id="docs">
        <app-navbar @hamburger="sidebar = !sidebar" title="LabelMore Devkit"></app-navbar>

        <div class="grid">
            <transition name="grow">
                <app-sidebar v-if="sidebar"></app-sidebar>
            </transition>
            <div class="col-expand" id="wrapper">
                <router-view></router-view>
                <div class="section bg-primary theme-dark">
                    <div class="container p-2 text-center">
                        Copyright &copy; {{new Date().getFullYear()}} at <a href="www.infolks.info">Infolks</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import AppNavbar from '../components/Navbar.vue'
    import AppContent from '../pages/Content.vue'
    import AppSidebar from '../components/Sidebar.vue'
    import { mapState } from 'vuex';

    export default Vue.extend({
        components: {
            AppNavbar,
            AppContent,
            AppSidebar
        },

        data() {
            return {
                sidebar: true
            }
        }
    })
</script>

<style lang="scss" scoped>
    .grow-enter-active {
        transition: all .2s ease-in-out;
    }
    .grow-leave-active {
        transition: all .2s ease-in-out;
    }

    .grow-enter, .grow-leave-to {
        margin-left: -400px;
        opacity: 0;
    }

    #wrapper {
        background: #fff;

        height: calc(100vh - 80px);
        overflow-y: auto;

        @media screen and (min-width: breakpoint(medium)) {
            height:calc(100vh - 60px);
        }
    }
</style>