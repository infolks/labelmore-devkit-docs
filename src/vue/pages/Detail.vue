<template>
    <div class="section p-4">
        <h1 class="heading-xlarge detail-title">
            {{itemName}}
            <span class="label label-text-tint">{{item.kindString}}</span>
        </h1>
        <p class="text-lead d-before" v-if="item.comment">{{item.comment.shortText}}</p>

        <div class="relations m-top d-before" v-if="item.extendedTypes && item.extendedTypes.length">
            <span class="text-medium">Extends:</span>
            <span class="relation-items">
                <router-link class="relation-item" :to="{name: 'api.item', params: {id: ext.id}}" v-for="ext in item.extendedTypes" :key="ext.id">
                    {{ext.name}}
                </router-link>
            </span>
        </div>

        <div class="relations m-top d-before" v-if="item.extendedBy && item.extendedBy.length">
            <span class="text-medium">Extended by :</span>
            <span class="relation-items">
                <router-link class="relation-item" :to="{name: 'api.item', params: {id: ext.id}}" v-for="ext in item.extendedBy" :key="ext.id">
                    {{ext.name}}
                </router-link>
            </span>
        </div>

        <!-- Constructor -->
        <div class="m-top-3" v-if="constr">
            <h2 class="heading-medium">
                Constructor
                <span class="label label-text-tint">
                    Constructor
                </span>
            </h2>
            <div class="m-vertical" v-for="sign in constr.signatures" :key="sign.id">
                <h3 class="heading-small">
                    <code>_({{signatureString(sign)}})</code>
                </h3>
                <div class="m-top-small">
                    <table class="table">
                        <tr>
                            <th>Parameter</th>
                            <th>Type</th>
                        </tr>
                        <tr v-for="param in sign.parameters" :key="param.id">
                            <td class="text-medium bg-light">{{param.name}}</td>
                            <td>
                                <!-- <router-link v-if="param.type.type === 'reference' && param.type.id" :to="{name: 'api.item', params: {id: param.type.id}}">
                                    {{typeString(param.type)}} <sup><i class="fas fa-xs fa-external-link-alt"></i></sup>
                                </router-link>
                                <span v-else>
                                    {{typeString(param.type)}}
                                </span> -->
                                <type-link :type="param.type"></type-link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <!-- Properties -->
        <div class="m-top-3" v-if="properties && properties.length">
            <h2 class="heading-medium">
                Properties
            </h2>
            <div class="m-top-small">
                <table class="table">
                    <tr>
                        <th>Property</th>
                        <th>Type</th>
                    </tr>
                    <tr v-for="prop in properties" :key="prop.id">
                        <td class="text-medium bg-light">{{prop.name}}</td>
                        <td>
                            <!-- <router-link v-if="prop.type.type === 'reference' && prop.type.id" :to="{name: 'api.item', params: {id: prop.type.id}}">
                                {{typeString(prop.type)}} <sup><i class="fas fa-xs fa-external-link-alt"></i></sup>
                            </router-link>
                            <span v-else>
                                {{typeString(prop.type)}}
                            </span> -->
                            <type-link :type="prop.type"></type-link>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Methods -->
        <div class="m-top-3" v-for="method in methods" :key="method.id">
            <div class="m-vertical-small" v-for="sign in method.signatures" :key="sign.id">
                <h3 class="heading-small">
                    <code>_.{{method.name}}({{signatureString(sign)}})</code>
                    <span class="label label-text-tint">
                        {{method.flags.isProtected? 'Protected':''}} Method
                    </span>
                </h3>
                <p class="text-meta d-before" v-if="sign.comment && sign.comment.shortText">{{sign.comment.shortText}}</p>
                <p class="d-before text-meta" v-if="sign.type">
                    <span class="text-bold">returns:</span>
                    <type-link :type="sign.type"></type-link>
                </p>
                <div class="m-top-small" v-if="sign.parameters && sign.parameters.length">
                    <table class="table">
                        <tr>
                            <th>Parameter</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                        <tr v-for="param in sign.parameters" :key="param.id">
                            <td class="text-medium bg-light">{{param.name}}</td>
                            <td>
                                <!-- <router-link v-if="param.type.type === 'reference' && param.type.id" :to="{name: 'api.item', params: {id: param.type.id}}">
                                    {{typeString(param.type)}} <sup><i class="fas fa-xs fa-external-link-alt"></i></sup>
                                </router-link>
                                <span v-else>
                                    {{typeString(param.type)}}
                                </span> -->
                                <type-link :type="param.type"></type-link>
                            </td>
                            <td>
                                <span v-if="param.comment && param.comment.text">{{param.comment.text}}</span>
                                <span v-else>-</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
<!-- 
        <app-code language="json" :line-numbers="true" :code="JSON.stringify(item, null, 4)">
        </app-code> -->
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Prism from 'prismjs'

    import AppCode from '../components/Code.vue'
    import TypeLink from '../components/TypeLink.vue'

    export default Vue.extend({
        props: ['id'],
        components: {
            AppCode,
            TypeLink
        },
        computed: {

            itemName() {

                if (this.item) {

                    if (this.item.typeParameter) {
                        return `${this.item.name}<${
                            this.item.typeParameter.map(p => p.name).join(',')
                        }>`
                    }

                    return this.item.name
                }

                return ''
            },

            item() {

                return this.$store.getters.items
                    .find(item => item.id === parseInt(this.id))
            },

            constr() {
                if (this.item && this.item.children) {
                    return this.item.children
                        .find(ch => ch.kind === 512)
                }

                return null
            },

            properties() {
                if (this.item && this.item.children) {
                    return this.item.children
                        .filter(ch => {
                            return ch.kind === 1024 && !ch.flags.isPrivate
                        })
                }

                return []
            },

            methods() {
                if (this.item && this.item.children) {
                    return this.item.children
                        .filter(ch => {
                            return ch.kind === 2048 && !ch.flags.isPrivate
                        })
                }

                return []
            }
        },

        methods: {
            signatureString(signature) {
                return (signature.parameters || [])
                    .map(param => param.name)
                    .join(',')
            },

            // typeString(type) {

            //     if (type.type === "union") {

            //         return type.types.map(t => this.typeString(t)).join(" | ")

            //     }

            //     else if (type.type === "array") {

            //         return this.typeString(type.elementType) + "[]"

            //     }

            //     else if (type.type === "reference" && type.typeArguments) {
            //         return `${type.name}<${
            //             type.typeArguments.map(t => this.typeString(t)).join(',')
            //         }>`
            //     }

            //     return type.name
            // }
        }
    })
</script>
<style lang="scss" scoped>

    .relations {
        .relation-item {
            &:not(:last-child)::after {
                content: '|';
                color: rgba(0,0,0,0.3);
                margin: 0 0.5rem;
            }
        }
    }
    
</style>
