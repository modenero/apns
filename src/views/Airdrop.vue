<template>
    <main class="relative bg-white py-16 sm:py-24">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div class="relative sm:py-16 lg:py-0">
                <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                    <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
                    <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                        <defs>
                            <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                    </svg>
                </div>

                <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                    <!-- Testimonial card-->
                    <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                        <img
                            class="absolute inset-0 h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                            alt=""
                        />
                        <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
                        <div class="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"></div>

                        <div class="relative px-8">
                            <div>
                                <img class="h-24" :src="require('../assets/ava-nakamoto.png')" alt="Ava Nakamoto" />
                            </div>

                            <blockquote class="mt-8">
                                <div class="relative text-lg font-medium text-white md:flex-grow">
                                    <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                        <path
                                            d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                                        />
                                    </svg>

                                    <p class="relative">
                                        It's been my mission to create the ultimate mobile DeFi experience for my community.
                                        The launch of my NEW Push Notification Service is a major step in delivering that dream.
                                    </p>
                                </div>

                                <footer class="mt-4">
                                    <p class="text-base font-semibold text-indigo-200">
                                        Ava Nakamoto, APNS Architect
                                    </p>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <!-- Content area -->
                <div class="pt-12 sm:pt-16 lg:pt-20">
                    <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                        Hackathon Airdrop
                    </h2>

                    <h3 class="text-xl text-red-500 font-medium tracking-tight sm:text-2xl">
                        Limited Supply
                    </h3>

                    <div class="mt-6 text-gray-500 space-y-6">
                        <p class="text-lg">
                            We're getting you off to a great start with your push notifications.
                            Connect your wallet and collect your share of <strong>UP TO 2 MILLION $APNS, EVERY DAY!</strong>
                        </p>

                        <p class="text-base leading-7">
                            We have restricted the Airdrop to wallets that have transactions from BEFORE the hackathon annoucment.
                            This will allow us to better mitigate against SPAM and ABUSE.
                        </p>

                        <p class="text-base leading-7">
                            If you DO NOT receive your $APNS tokens right away, please reach out to our team on Twitter for support.
                            <a href="https://twitter.com/APNS_io" target="_blank" class="block text-lg text-blue-500 font-bold hover:underline">@APNS_io</a>
                        </p>

                    </div>
                </div>

                <!-- Stats section -->
                <div class="mt-10">
                    <dl class="grid grid-cols-2 gap-x-4 gap-y-8 text-center">

                        <div class="border-t-2 border-gray-100 pt-6">
                            <dt class="text-base font-medium text-gray-500">
                                Airdrop Started
                            </dt>

                            <dd class="text-xl font-extrabold tracking-tight text-gray-900">
                                Sunday, February 27th
                                <br />@ 00:00 UTC
                            </dd>
                        </div>

                        <div class="border-t-2 border-gray-100 pt-6">
                            <dt class="text-base font-medium text-gray-500">
                                Airdrop Ending
                            </dt>

                            <dd class="text-xl font-extrabold tracking-tight text-gray-900">
                                Thursday, March 31st
                                <br />XX days left
                            </dd>
                        </div>

                        <div class="border-t-2 border-gray-100 pt-6">
                            <dt class="text-base font-medium text-gray-500">
                                Individual Wallets
                            </dt>

                            <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                                55
                            </dd>
                        </div>

                        <div class="border-t-2 border-gray-100 pt-6">
                            <dt class="text-base font-medium text-gray-500">
                                Total $APNS Claimed
                            </dt>

                            <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                                55,000
                            </dd>
                        </div>

                        <div class="hidden border-t-2 border-gray-100 pt-6">
                            <dt class="text-base font-medium text-gray-500">
                                $APNS Remaining
                            </dt>

                            <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                                n/a
                            </dd>
                        </div>
                    </dl>

                    <div class="mt-10">
                        <a href="https://avagogo.io" target="_blank" class="text-lg font-medium text-indigo-600">
                            Learn more about how Ava Nakamoto is changing the world <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            //
        }
    },
    methods: {
        //
    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
