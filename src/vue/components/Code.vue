<template>
    <pre :class="languageClass">
        <code v-html="highlightedCode">
        </code>
    </pre>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Prism from 'prismjs'

    export default Vue.extend({
        props: ['language', 'lineNumbers', 'code'],
        computed: {
            languageClass() {
                return {
                    [`language-${this.language}`]: true,
                    ["line-numbers"]: this.lineNumbers
                }
            },

            highlightedCode() {
                const code = Prism.plugins.NormalizeWhitespace.normalize(this.code || this.$slots.default[0].text)
                return Prism.highlight(code, Prism.languages[this.language], this.language)
            }
        },
        mounted() {
            Prism.highlightAll()
        },

        updated() {
            Prism.highlightAll()
        }
    })
</script>

<style scoped>

</style>