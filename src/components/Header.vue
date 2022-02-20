<template>
    <header class="relative">
        <div class="bg-warm-gray-50">
            <nav class="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8" aria-label="Global">
                <div class="flex items-center flex-1">

                    <div class="flex items-center justify-between w-full lg:w-auto">
                        <router-link to="/">
                            <span class="sr-only">APNS: Ava Push Notification Service</span>
                            <img class="h-12 w-auto sm:h-16" :src="require('../assets/logo.png')" alt="APNS" />
                        </router-link>

                        <div class="-mr-2 flex items-center lg:hidden">
                            <button
                                @click="toggleMobileMenu"
                                type="button"
                                class="bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500"
                                aria-expanded="false"
                            >
                                <span class="sr-only">Open main menu</span>
                                <!-- Heroicon name: outline/menu -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="hidden space-x-10 lg:flex lg:ml-10">
                        <router-link to="/about" class="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">
                            About
                        </router-link>

                        <router-link to="/account" class="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">
                            My Account
                        </router-link>

                        <router-link to="/help" class="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900">
                            Need help?
                        </router-link>

                        <router-link to="/airdrop" class="text-base font-bold text-red-500 hover:text-warm-gray-900">
                            Hackathon Airdrop
                        </router-link>
                    </div>
                </div>

                <div class="hidden lg:flex lg:items-center lg:space-x-6">
                    <a @click="connect" href="javascript://" class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-teal-500 text-white font-medium hover:bg-teal-600">
                        Connect Your Wallet
                    </a>
                </div>
            </nav>
        </div>

        <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
        <div v-if="showMobileMenu" class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
            <div class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                    <a @click="home" href="javascript://">
                        <img class="h-12 w-auto" :src="require('../assets/logo.png')" alt="APNS" />
                    </a>

                    <div class="-mr-2">
                        <button @click="toggleMobileMenu" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                            <span class="sr-only">Close menu</span>
                            <!-- Heroicon name: outline/x -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="pt-5 pb-6">
                    <div class="px-2 space-y-1">
                        <a @click="about" href="javascript://" class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">
                            About
                        </a>

                        <a @click="account" href="javascript://" class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">
                            My Account
                        </a>

                        <a @click="help" href="javascript://" class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">
                            Need help?
                        </a>

                        <a @click="airdrop" href="javascript://" class="block px-3 py-2 rounded-md text-base font-bold text-red-500 hover:bg-warm-gray-50">
                            Hackathon Airdrop
                        </a>
                    </div>

                    <div class="mt-6 px-5">
                        <a @click="connect" href="javascript://" class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-teal-500 text-white font-medium hover:bg-teal-600">
                            Connect Your Wallet
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </header>
</template>

<script>
/* Import modules. */
import { inject } from 'vue'

export default {
    components: {
        //
    },
    data: () => {
        return {
            showMobileMenu: null,
        }
    },
    methods: {
        /**
         * Set User
         */
        setUser(_user) {
            /* Set user. */
            this.$store.commit('setUser', _user)
        },

        /**
         * Handle Current User
         */
        handleCurrentUser() {
            const user = this.$moralis.User.current()
            // console.log('MORALIS USER', user)

            if (user) {
                this.setUser(user)
            }
        },

        /**
         * Connect Wallet
         */
        async connect() {
            this.showMobileMenu = false

            // const user = await this.$moralis.Web3.authenticate()
            const user = await this.$moralis.Web3
                .authenticate({
                    signingMessage: `Welcome to Ava's Push Notification Service. Please authenticate your account -- `
                })
                .catch(err => {
                    console.error(err)

                    if (err && err.code && err.code === 4100) {
                        alert('Please sign-in to your Web3 wallet to continue.')
                    } else if (err && err.message) {
                        alert(err.message)
                    }
                })

            /* Save user. */
            this.setUser(user)
        },

        /**
         * Disconnect
         */
        async disconnect() {
            await this.$moralis.User.logOut()
                .catch(err => {
                    console.error(err)
                })
            this.setUser({})
        },

        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu
        },

        home() {
            this.showMobileMenu = false

            this.$router.push('/')
        },

        about() {
            this.showMobileMenu = false

            this.$router.push('/about')
        },

        account() {
            this.showMobileMenu = false

            this.$router.push('/account')
        },

        help() {
            this.showMobileMenu = false

            this.$router.push('/help')
        },

        airdrop() {
            this.showMobileMenu = false

            this.$router.push('/airdrop')
        },

    },
    created: function () {
        /* Set mobile menu flag. */
        this.showMobileMenu = false

        // const store = useStore()
        this.$moralis = inject('$moralis')

    },
    mounted: function () {
        /* Handle current user. */
        this.handleCurrentUser()
    },
}
</script>
