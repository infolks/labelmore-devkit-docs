import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        docs: null,
        loading: true
    },
    getters: {
        items(state) {

            if (state.docs) {
                return state.docs.children
                    .filter(item => item.flags.isExported)
            }

            return []
        },

        classes(state, getters) {
            if (state.docs) {
                return getters.items
                    .filter((item: any) => {
                        return item.kind === 128
                    })
            }

            return []
        },

        interfaces(state, getters) {
            if (state.docs) {
                return getters.items
                    .filter((item: any) => {
                        return item.kind === 256
                    })
            }

            return []
        },

        constants(state, getters) {

            if (state.docs) {
                return getters.items
                    .filter((item: any) => {
                        return item.kind === 2097152
                    })
            }
        },

        types(state, getters) {

            if (state.docs) {
                return getters.items
                    .filter((item: any) => {
                        return item.kind === 4194304
                    })
            }
        }
    },
    mutations: {
        setDocs(state, payload) {
            state.docs = payload
        },

        setLoading(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        setDocs(context, payload) {
            context.commit('setDocs', payload)
        },

        startLoading(context) {
            context.commit('setLoading', true)
        },

        stopLoading(context) {
            context.commit('setLoading', false)
        }
    }
})