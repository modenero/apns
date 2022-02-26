<template>
    <main class="mb-20 relative bg-white" aria-labelledby="contact-heading">
        <div class="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true"></div>
        <!-- Decorative dot pattern -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                <defs>
                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-warm-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative bg-white shadow-xl">
                <h2 id="contact-heading" class="sr-only">Contact us</h2>

                <div class="grid grid-cols-1 lg:grid-cols-3">

                    <Guide />

                    <!-- Contact form -->
                    <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                        <h3 class="text-xl font-medium text-warm-gray-900">
                            Add a NEW Notfication Alert
                        </h3>

                        <Step1 />

                        <Platforms />

                        <form action="javascript://" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                            <div class="sm:col-span-2">
                                <label for="wallet-address" class="block text-lg font-medium text-gray-500">
                                    Wallet <span class="text-xs text-red-500 font-medium">(required)</span>
                                </label>

                                <div class="mt-1">
                                    <input
                                        v-model="address"
                                        type="text"
                                        name="wallet-address"
                                        id="wallet-address"
                                        placeholder="enter your wallet address here"
                                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div v-if="address" class="sm:col-span-2">
                                <label for="wallet-address" class="block text-lg font-medium text-gray-500">
                                    Blockchain <span class="text-xs text-red-500 font-medium">(required)</span>
                                </label>

                                <fieldset class="mt-1">
                                    <legend class="sr-only">Blockchain setting</legend>
                                    <div class="bg-white rounded-md -space-y-px">
                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="blockchain"
                                                type="radio"
                                                name="blockchain"
                                                value="AVAX"
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="blockchain-0-label"
                                                aria-describedby="blockchain-0-description"
                                            />

                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="blockchain-0-label" class="block text-sm font-medium">
                                                    Avalanche (AVAX)
                                                </span>

                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="blockchain-0-description" class="block text-sm">
                                                    Create a NEW alert on the Avalanche blockchain.
                                                </span>
                                            </div>
                                        </label>

                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="blockchain"
                                                type="radio"
                                                name="blockchain"
                                                value="ETH"
                                                disabled
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="blockchain-1-label"
                                                aria-describedby="blockchain-1-description"
                                            />
                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="blockchain-1-label" class="block text-sm font-medium">
                                                    Ethereum (ETH)
                                                </span>
                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="blockchain-1-description" class="block text-sm">
                                                    This blockchain is NOT available in this "alpha" demo.
                                                </span>
                                            </div>
                                        </label>

                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="blockchain"
                                                type="radio"
                                                name="blockchain"
                                                value="MATIC"
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="blockchain-2-label"
                                                aria-describedby="blockchain-2-description"
                                            />
                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="blockchain-2-label" class="block text-sm font-medium">
                                                    Polygon (MATIC)
                                                </span>

                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="blockchain-2-description" class="block text-sm">
                                                    Create a NEW alert on the Polygon blockchain.
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                </fieldset>
                            </div>

                            <div v-if="blockchain">
                                <label for="email" class="block text-lg font-medium text-gray-500">
                                    Email
                                </label>

                                <div class="mt-1">
                                    <input
                                        v-model="email"
                                        id="email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        placeholder="satoshi@bitcoin.org"
                                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div v-if="blockchain">
                                <div class="flex justify-between items-center">
                                    <label for="mobile" class="block text-lg font-medium text-gray-500">
                                        Mobile
                                    </label>

                                    <span id="mobile-optional" class="mr-3 text-xs text-red-500 font-medium">
                                        PREMIUM ($)
                                    </span>
                                </div>

                                <div class="mt-1">
                                    <input
                                        v-model="mobile"
                                        type="text"
                                        name="mobile"
                                        id="mobile"
                                        autocomplete="tel"
                                        placeholder="+1 404 555-1337"
                                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                        aria-describedby="mobile-optional"
                                    />
                                </div>
                            </div>

                            <div v-if="blockchain">
                                <label for="email" class="block text-lg font-medium text-gray-500">
                                    Telegram
                                </label>

                                <div class="mt-1">
                                    <input
                                        v-model="telegram"
                                        id="telegram"
                                        name="telegram"
                                        type="telegram"
                                        autocomplete="telegram"
                                        disabled
                                        placeholder="enter your Telegram username"
                                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div v-if="blockchain">
                                <label for="email" class="block text-lg font-medium text-gray-500">
                                    Signal
                                </label>

                                <div class="mt-1">
                                    <input
                                        v-model="signal"
                                        id="signal"
                                        name="signal"
                                        type="signal"
                                        autocomplete="signal"
                                        disabled
                                        placeholder="+1 404 555-1337"
                                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div v-if="blockchain">
                                <label for="email" class="block text-lg font-medium text-gray-500">
                                    Discord
                                </label>

                                <div class="mt-1">
                                    <input
                                        v-model="discord"
                                        id="discord"
                                        name="discord"
                                        type="discord"
                                        autocomplete="discord"
                                        disabled
                                        placeholder="enter your Discord username"
                                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div v-if="blockchain">
                                <label for="email" class="block text-lg font-medium text-gray-500">
                                    Slack
                                </label>

                                <div class="mt-1">
                                    <input
                                        v-model="slack"
                                        id="slack"
                                        name="slack"
                                        type="slack"
                                        autocomplete="slack"
                                        disabled
                                        placeholder="enter your Slack username"
                                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div v-if="email || mobile" class="sm:col-span-2">
                                <label for="subject" class="block text-lg font-medium text-gray-500">
                                    Subject <span class="text-xs text-gray-400 font-medium">(optional)</span>
                                </label>

                                <div class="mt-1">
                                    <input
                                        v-model="subject"
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="enter your message subject here"
                                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div v-if="email || mobile" class="sm:col-span-2">
                                <div class="flex justify-between items-center">
                                    <label for="message" class="block text-lg font-medium text-gray-500">
                                        Message <span class="text-xs text-gray-400 font-medium">(optional)</span>
                                    </label>

                                    <span id="message-max" class="mr-3 text-xs text-red-500">
                                        Max. 500 characters
                                    </span>
                                </div>

                                <div class="mt-1">
                                    <textarea
                                        v-model="body"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                                        aria-describedby="message-max"
                                    ></textarea>
                                </div>
                            </div>

                            <div v-if="email || mobile" class="sm:col-span-2">
                                <label for="platform" class="block text-lg font-medium text-gray-500">
                                    Platform <span class="text-xs text-gray-400 font-medium">(optional)</span>
                                </label>

                                <small>
                                    If you don't specifiy a platform, you'll receive ALL transaction activity for <span class="text-red-500 font-light">{{address}}</span>.
                                </small>

                                <fieldset class="mt-1">
                                    <legend class="sr-only">Platform setting</legend>
                                    <div class="bg-white rounded-md -space-y-px">

                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="platform"
                                                type="radio"
                                                name="platform"
                                                value="AAVE"
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="platform-0-label"
                                                aria-describedby="platform-0-description"
                                            />

                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="platform-0-label" class="block text-sm font-medium">
                                                    Aave (Polygon)
                                                </span>

                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="platform-0-description" class="block text-sm">
                                                    Create custom alerts for ANY activity on Aave.
                                                </span>
                                            </div>
                                        </label>

                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="platform"
                                                type="radio"
                                                name="platform"
                                                value="ALPHA_FINANCE_LAB"
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="platform-1-label"
                                                aria-describedby="platform-1-description"
                                            />
                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="platform-1-label" class="block text-sm font-medium">
                                                    Alpha Finance Lab (Avalanche)
                                                </span>
                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="platform-1-description" class="block text-sm">
                                                    Create custom alerts for ANY activity on Homoro v2 and AlphaX.
                                                </span>
                                            </div>
                                        </label>

                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="platform"
                                                type="radio"
                                                name="platform"
                                                value="BALANCER"
                                                disabled
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="platform-2-label"
                                                aria-describedby="platform-2-description"
                                            />
                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="platform-2-label" class="block text-sm font-medium">
                                                    Balancer (Arbitrum)
                                                </span>

                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="platform-2-description" class="block text-sm">
                                                    Support for this platform is coming soon..
                                                </span>
                                            </div>
                                        </label>

                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="platform"
                                                type="radio"
                                                name="platform"
                                                value="POOL_TOGETHER"
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="platform-0-label"
                                                aria-describedby="platform-0-description"
                                            />

                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="platform-0-label" class="block text-sm font-medium">
                                                    PoolTogether (Polygon)
                                                </span>

                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="platform-0-description" class="block text-sm">
                                                    PoolTogether is a crypto-powered savings protocol based on Premium Bonds.
                                                </span>
                                            </div>
                                        </label>

                                    </div>
                                </fieldset>
                            </div>

                            <div v-if="email || mobile" class="sm:col-span-2">
                                <label for="frequency" class="block text-lg font-medium text-gray-500">
                                    Frequency <span class="text-xs text-red-500 font-medium">(required)</span>
                                </label>

                                <small>
                                    If you don't specifiy a frequency, you'll receive ALL transaction activity immediately.
                                </small>

                                <fieldset class="mt-1">
                                    <legend class="sr-only">Frequency setting</legend>
                                    <div class="bg-white rounded-md -space-y-px">
                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="frequency"
                                                type="radio"
                                                name="frequency"
                                                value=""
                                                checked
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="frequency-0-label"
                                                aria-describedby="frequency-0-description"
                                            />

                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="frequency-0-label" class="block text-sm font-medium">
                                                    Immediate
                                                </span>

                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="frequency-0-description" class="block text-sm">
                                                    Create custom alerts for ANY activity on Aave.
                                                </span>
                                            </div>
                                        </label>

                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="frequency"
                                                type="radio"
                                                name="frequency"
                                                value="DAILY"
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="frequency-1-label"
                                                aria-describedby="frequency-1-description"
                                            />
                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="frequency-1-label" class="block text-sm font-medium">
                                                    Daily
                                                </span>
                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="frequency-1-description" class="block text-sm">
                                                    Create custom alerts for ANY activity on Homoro v2 and AlphaX.
                                                </span>
                                            </div>
                                        </label>

                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="frequency"
                                                type="radio"
                                                name="frequency"
                                                value="WEEKLY"
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="frequency-2-label"
                                                aria-describedby="frequency-2-description"
                                            />
                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="frequency-2-label" class="block text-sm font-medium">
                                                    Weekly
                                                </span>

                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="frequency-2-description" class="block text-sm">
                                                    Support for this platform is coming soon..
                                                </span>
                                            </div>
                                        </label>

                                        <!-- Checked: "bg-indigo-50 border-indigo-200 z-10", Not Checked: "border-gray-200" -->
                                        <label class="rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer focus:outline-none">
                                            <input
                                                v-model="frequency"
                                                type="radio"
                                                name="frequency"
                                                value="MONTHLY"
                                                class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                aria-labelledby="frequency-2-label"
                                                aria-describedby="frequency-2-description"
                                            />
                                            <div class="ml-3 flex flex-col">
                                                <!-- Checked: "text-indigo-900", Not Checked: "text-gray-900" -->
                                                <span id="frequency-2-label" class="block text-sm font-medium">
                                                    Monthly
                                                </span>

                                                <!-- Checked: "text-indigo-700", Not Checked: "text-gray-500" -->
                                                <span id="frequency-2-description" class="block text-sm">
                                                    Support for this platform is coming soon..
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                </fieldset>
                            </div>

                            <div class="sm:col-span-2 sm:flex sm:justify-end">
                                <button
                                    v-if="isReadyToSubmit"
                                    @click="create"
                                    type="submit"
                                    class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                                >
                                    Create a New Alert
                                </button>

                                <button
                                    v-if="!isReadyToSubmit"
                                    type="submit"
                                    disabled
                                    class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 cursor-default border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                                >
                                    Create a New Alert
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'

/* Import components. */
import Guide from './Creator/Guide'
import Platforms from './Creator/Platforms'
import Step1 from './Creator/Step1'

export default {
    components: {
        Guide,
        Platforms,
        Step1,
    },
    data: () => {
        return {
            address: null,
            body: null,
            blockchain: null,
            discord: null,
            email: null,
            frequency: null,
            mobile: null,
            platform: null,
            signal: null,
            slack: null,
            subject: null,
            telegram: null,
        }
    },
    computed: {
        isReadyToSubmit() {
            /* Validate address. */
            if (!this.address) return false

            /* Validate blockchain. */
            if (!this.blockchain) return false

            /* Validate channel. */
            if (!this.email && !this.mobile) return false

            /* Return true. */
            return true
        }
    },
    methods: {
        /**
         * Create
         *
         * This will create a new alert.
         *
         * NOTE: This requires on-chain gas to be spent.
         */
        async create() {
            /* Initialize package. */
            let pkg = {}

            /* Validate address. */
            if (!this.address) {
                return alert('Please enter your blockchain address.')
            }

            /* Set address. */
            pkg.address = this.address

            /* Set blockchain. */
            pkg.blockchain = this.blockchain

            /* Set email. */
            pkg.email = this.email

            /* Set mobile. */
            pkg.mobile = this.mobile

            /* Set Signal. */
            pkg.signal = this.signal

            /* Set Telegram. */
            pkg.telegram = this.telegram

            /* Set Discord. */
            pkg.discord = this.discord

            /* Set Slack. */
            pkg.slack = this.slack

            /* Set subject. */
            pkg.subject = this.subject

            /* Set body. */
            pkg.body = this.body

            /* Set platform. */
            pkg.platform = this.platform

            /* Set frequency. */
            pkg.frequency = this.frequency

            // FOR DEBUGGING PURPOSES ONLY
            alert(JSON.stringify(pkg, null, 4))


            /* Validate Web3 provider. */
            if (!window.ethereum) {
                /* Send notification request. */
                // this.$store.dispatch('showNotif', {
                //     icon: 'error',
                //     title: 'MetaMask Error!',
                //     message: `No Web3 provider found!`,
                // })
                alert('No Web3 provider found!')

                return
            }

            /* Connect to Web3 provider. */
            await window.ethereum
                .enable()
                .catch(err => console.error(err))



            /* Initialize provider. */
            const provider = new ethers.providers
                .Web3Provider(window.ethereum)
            console.log('PROVIDER', provider)

            /* Set signer. */
            const signer = provider.getSigner()


            this.blockNum = await provider
                .getBlockNumber()
                .catch(err => console.error(err))
            console.info('Current block height:', this.blockNum) // eslint-disable-line

            // FOR DEVELOPMENT PURPOSES ONLY
            // The first campaign contract is hardcoded.
            // const cAddr = '0x7aacec83e10d8f8dfdfaa4858d55b0cc29ee4795' // Polygon
            const cAddr = '0x7aacec83e10d8f8dfdfaa4858d55b0cc29ee4795' // Avalanche

            /* Set Campaign ABI. */
            const cAbi = require('../abis/emitter.json')

            /* Initialize campaign instance. */
            const event = new ethers.Contract(cAddr, cAbi, signer)
            console.log('CONTRACT (event):', event) // eslint-disable-line

            // const pkg = {
            //     hi: 'there',
            // }

            const response = await event
                .notify('0x7465737400000000000000000000000000000000000000000000000000000000', JSON.stringify(pkg))
            console.log('EVENT RESPONSE', response) // eslint-disable-line


            // /* Set contract ABI (Telr) Exchange. */
            // const abi = ''
            //
            // /* Initialize contract connection via Web3 Provider. */
            // const contract = new ethers.Contract(contractAddress, abi, provider)
            //
            // /* Set key. */
            // // FIXME: Calulate this value `causes.assets.md`.
            // // const key = '0xbc3ff924269ad0b21b98ec6cfb735f77b55475c8e099357a5858e1f1efc5b397'
            //
            // /* Retrieve owner. */
            // const owner = await contract.owner()
            // console.log('OWNER', owner)
            //
            // /* Generate secret hash. */
            // const secretHash = await contract.generateSecretHash(Buffer.from('de5738e6eca81c4e9a0dfeb39c75a29c6751e78c3a7d49175eeef742bf7c8615', 'hex'))
            // // let hash = ethers.utils.arrayify('0xde5738e6eca81c4e9a0dfeb39c75a29c6751e78c3a7d49175eeef742bf7c8615')
            // // console.log('HASH', hash, Buffer.from(hash).toString('hex'));
            // // const secretHash = await contract.generateSecretHash(hash)
            // console.log('SECRET HASH', secretHash)
            //
            // let maker = '0x830ad555fCe0547782E14d67d22002082916e660'
            // let token = '0xef54ae01d55adecac852cbe3e6f16b0d1bf38de0'
            // let secret = Buffer.from('de5738e6eca81c4e9a0dfeb39c75a29c6751e78c3a7d49175eeef742bf7c8615', 'hex')
            // const orderid = await contract.generateOrderid(maker, token, secret)
            // console.log('ORDER ID', orderid);


        },

    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
