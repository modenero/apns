import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null
    },
    getters: {
        /**
         * Address
         */
        address (_state) {
            /* Validate user. */
            if (!_state.user) return 'Unknown user'

            /* Request (default) address. */
            const address = _state.user.get('ethAddress')

            /* Validate address. */
            if (!address) return 'Anonymous user'

            /* Return address. */
            return address
        },

        /**
         * User
         *
         * Returns a Moralis getter object of the logged in user.
         * eg. `this.$state.getters.user.get('...')`
         */
        user (_state) {
            return _state.user
        },
    },
    actions: {
        //
    },
    mutations: {
        /**
         * Set User
         */
        setUser (state, payload) {
            state.user = payload
        },

    },
    modules: {
        //
    },
})
