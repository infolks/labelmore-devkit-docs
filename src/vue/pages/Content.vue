<template>
    <div class="section" id="content">
        <div class="container p-4">
            <h2 class="heading-large heading-divider">
                Content
            </h2>

            <!-- Classes -->

            <div class="m-top-3">
                <h3 class="heading-small text-medium">
                    <i class="fas fa-cube m-right"></i> Classes
                </h3>
                <div class="grid" v-if="classes">
                    
                    <div class="col-12 p-small col-medium-4" v-for="(items, index) in chunkify(classes, 3)" :key="index">
                        <div class="list list-divider list-relaxed m-top">
                            <router-link :to="{name: 'api.item', params: {id: item.id}}" class="list-item" v-for="item in items" :key="item.id">
                                <i class="fas fa-cube m-right"></i> {{item.name}}
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Interfaces -->

            <div class="m-top-3">
                <h3 class="heading-small text-medium">
                    <i class="fas fa-ring m-right"></i> Interfaces
                </h3>
                <div class="grid" v-if="interfaces">
                    
                    <div class="col-12 p-small col-medium-4" v-for="(items, index) in chunkify(interfaces, 3)" :key="index">
                        <div class="list list-divider list-relaxed m-top">
                            <router-link :to="{name: 'api.item', params: {id: item.id}}" class="list-item" v-for="item in items" :key="item.id">
                                <i class="fas fa-ring m-right"></i> {{item.name}}
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Types -->

            <div class="m-top-3">
                <h3 class="heading-small text-medium">
                    <i class="fas fa-feather-alt m-right"></i> Type Aliases
                </h3>
                <div class="grid" v-if="types">
                    
                    <div class="col-12 p-small col-medium-4" v-for="(items, index) in chunkify(types, 3)" :key="index">
                        <div class="list list-divider list-relaxed m-top">
                            <router-link :to="{name: 'api.item', params: {id: item.id}}" class="list-item" v-for="item in items" :key="item.id">
                                <i class="fas fa-feather-alt m-right"></i> {{item.name}}
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Constants -->

            <div class="m-top-3">
                <h3 class="heading-small text-medium">
                    <i class="fas fa-fire m-right"></i> Constants
                </h3>
                <div class="grid" v-if="constants">
                    
                    <div class="col-12 p-small col-medium-4" v-for="(items, index) in chunkify(constants, 3)" :key="index">
                        <div class="list list-divider list-relaxed m-top">
                            <router-link :to="{name: 'api.item', params: {id: item.id}}" class="list-item" v-for="item in items" :key="item.id">
                                <i class="fas fa-fire m-right"></i> {{item.name}}
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { mapGetters } from 'vuex'

    export default Vue.extend({
        methods: {
            chunkify(array: any[], nchunks: number) {

                const len = array.length

                const chunkSize = Math.ceil(len/nchunks)

                const chunks = []

                for (let i=0; i<len; i+=chunkSize) {
                    chunks.push(array.slice(i, i+chunkSize))

                }

                return chunks;
            }
        },

        computed: {
            ...mapGetters(['classes', 'interfaces', 'constants', 'types'])
        },
    })
</script>