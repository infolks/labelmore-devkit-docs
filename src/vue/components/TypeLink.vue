<template>
    <span>
        <span v-if="type.type === 'union'">
            <span v-for="(t,i) in type.types" :key="i">
                <type-link :type="t"></type-link> <span v-if="i < type.types.length-1"> | </span>
            </span>
        </span>
        <span v-if="type.type === 'intersection'">
            <span v-for="(t,i) in type.types" :key="i">
                <type-link :type="t"></type-link> <span v-if="i < type.types.length-1"> &amp; </span>
            </span>
        </span>
        <span v-else-if="type.type === 'array'">
            <type-link :type="type.elementType"></type-link> []
        </span>
        <span v-else-if="type.type === 'reference'">
            <router-link :to="{name: 'api.item', params: {id: type.id}}" v-if="type.id">
                {{type.name}}
                <!-- <sup><i class="fas fa-xs fa-external-link-alt"></i></sup> -->
            </router-link>
            <span v-else>
                {{type.name}}
            </span>
            <span v-if="type.typeArguments && type.typeArguments.length">
                &lt; 
                <span v-for="(t,i) in type.typeArguments" :key="i">
                    <type-link :type="t"></type-link>
                    <span v-if="i < type.typeArguments.length-1"> , </span>
                </span>
                &gt;
            </span>
        </span>
        <span v-else-if="type.type === 'stringLiteral'">
            {{type.value}}
        </span>
        <span v-else>
            {{type.name}}
        </span>
    </span>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'type-link',
        props: ['type'],
        computed: {
            
        }
    })
</script>

<style scoped>

</style>