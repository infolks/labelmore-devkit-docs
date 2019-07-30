<template>
    <div class="navbar bg-primary theme-dark">
        <a @click="$emit('hamburger')" class="button button-basic button-light nav-item">
            <i class="fas fa-bars"></i>
        </a>
        <span class="nav-item nav-logo">{{title}}</span>
        
        <div class="nav-right">
            <ul class="navbar-nav">
                <li>
                    <router-link active-class="active" :to="{name: 'home'}" class="nav-item">Home</router-link>
                </li>
                <li>
                    <router-link active-class="active" :to="{name: 'api.content'}" class="nav-item">API Docs</router-link>
                </li>
                <!-- <li>
                    <router-link href="#" class="nav-item">Tutorials</router-link>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props: ['title']
    })
</script>

<style scoped>

</style>