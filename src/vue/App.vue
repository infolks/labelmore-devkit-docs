<template>
    <div>
        <app-preloader v-if="loading"></app-preloader>
        <router-view v-if="!loading"></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import AppPreloader from './components/Preloader.vue'
    import axios from 'axios'

    export default Vue.extend({
        name: 'my-app',
        data() {
            return {
                title: 'Vue Starter'
            }
        },
        computed: {
            loading() {
                return this.$store.state.loading
            }
        },
        components: {
            AppPreloader
        },
        methods: {
            async fetchDocs() {
                
                try {

                    const api_global    = 'https://raw.githubusercontent.com/infolks/labelmore-devkit/master/docs/output.json'
                    // const api_local     = 'http://localhost:8080/output.json'

                    const docs = await axios.get(api_global)

                    this.$store.dispatch('setDocs', docs.data)

                    this.$store.dispatch('stopLoading')

                }

                catch (err) {

                    console.warn(err)
                    
                }

            }
        },
        created() {

            this.fetchDocs()
        }
    })
</script>

<style lang="scss" scoped>
    .cover {
        display: flex;
        height: 100vh;
        width: 100vw;

        h1.title {
            font-size: 5rem;
            font-weight: 300;
            margin: auto;
        }
    }
</style>
