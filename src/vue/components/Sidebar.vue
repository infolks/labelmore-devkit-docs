<template>
    <div class="section p-remove bg-light b-right" id="sidebar">
        <div class="list list-divider list-hover">
            <router-link active-class="active bg-muted" :to="{name: 'api.item', params: {id: item.id}}" class="list-item p-2" v-for="item in items" :key="item.id">
                <i class="fas m-right" :class="icon(item.kind)"></i> {{item.name}}
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {sortBy} from 'lodash'

    export default Vue.extend({
        computed: {
            items() {
                return sortBy(this.$store.getters.items, ['name'])
            }
        },

        methods: {
            icon(kind: number) {

                return {
                    'fa-cube'            : kind === 128,
                    'fa-ring'           : kind === 256,
                    'fa-fire'           : kind === 2097152,
                    'fa-feather-alt'    : kind === 4194304
                }
            }
        }
    })
</script>

<style lang="scss" scoped>
    #sidebar {
        width: 350px;
        height: calc(100vh - 80px);
        overflow-y: auto;

        @media screen and (min-width: breakpoint(medium)) {
            height:calc(100vh - 60px);
        }
    }
</style>