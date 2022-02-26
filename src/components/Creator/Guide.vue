<template>
    <main class="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12">

        <!-- Decorative angle backgrounds -->
        <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
            <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                <defs>
                    <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff"></stop>
                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
            <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                <defs>
                    <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff"></stop>
                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
            <svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                <defs>
                    <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff"></stop>
                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <!-- This example requires Tailwind CSS v2.0+ -->
        <nav class="" aria-label="Progress">
            <ol role="list" class="flex items-center">
                <li class="relative pr-8 sm:pr-16">
                    <!-- Completed Step -->
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-indigo-600"></div>
                    </div>
                    <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
                        <!-- Heroicon name: solid/check -->
                        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Step 1</span>
                    </a>
                </li>

                <li class="relative pr-8 sm:pr-16">
                    <!-- Completed Step -->
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-indigo-600"></div>
                    </div>
                    <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900">
                        <!-- Heroicon name: solid/check -->
                        <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Step 2</span>
                    </a>
                </li>

                <li class="relative pr-8 sm:pr-16">
                    <!-- Current Step -->
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-gray-200"></div>
                    </div>
                    <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full" aria-current="step">
                        <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true"></span>
                        <span class="sr-only">Step 3</span>
                    </a>
                </li>

                <li class="relative">
                    <!-- Upcoming Step -->
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-gray-200"></div>
                    </div>
                    <a href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                        <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true"></span>
                        <span class="sr-only">Step 4</span>
                    </a>
                </li>
            </ol>
        </nav>

        <h3 class="mt-10 text-2xl font-medium text-white">
            Step 3: Set receivers
        </h3>

        <p class="mt-6 text-base text-teal-50 max-w-3xl">
            Creating a new alert and modifying your current alerts requires a bit of gas.
        </p>

        <p class="hidden mt-6 text-base text-teal-50 max-w-3xl">
            <strong class="block text-lg">IMPORTANT NOTE:</strong>

            <span class="block mt-2">
                This service <strong>DOES NOT</strong> depend on a centralized API server, making it an <strong>UNSTOPPABLE</strong> solution.
            </span>

            <span class="block mt-2">
                All of your requests are sent using <a class="text-blue-700 font-bold hover:underline" href="javascript://">Event Logs</a>, which are recorded on-chain.
            </span>

            <span class="block mt-2">
                Our distributed network of servers read those logs and fulfill your requests.
            </span>
        </p>

        <!-- This example requires Tailwind CSS v2.0+ -->
        <nav class="mt-10" aria-label="Progress">
            <ol role="list" class="overflow-hidden">
                <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true"></div>
                    <!-- Complete Step -->
                    <a href="#" class="relative flex items-start group">
                        <span class="h-9 flex items-center">
                            <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                                <!-- Heroicon name: solid/check -->
                                <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </span>
                        <span class="ml-4 min-w-0 flex flex-col">
                            <span class="text-xs text-gray-50 font-semibold tracking-wide uppercase">STEP 1: Create account</span>
                            <span class="text-sm text-gray-200">Vitae sed mi luctus laoreet.</span>
                        </span>
                    </a>
                </li>

                <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"></div>
                    <!-- Current Step -->
                    <a href="#" class="relative flex items-start group" aria-current="step">
                        <span class="h-9 flex items-center" aria-hidden="true">
                            <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                                <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full"></span>
                            </span>
                        </span>
                        <span class="ml-4 min-w-0 flex flex-col">
                            <span class="text-base font-semibold tracking-wide uppercase text-indigo-100">STEP 2: Profile information</span>
                            <span class="text-sm text-gray-200">Cursus semper viverra facilisis et et some more.</span>
                        </span>
                    </a>
                </li>

                <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"></div>
                    <!-- Upcoming Step -->
                    <a href="#" class="relative flex items-start group">
                        <span class="h-9 flex items-center" aria-hidden="true">
                            <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                            </span>
                        </span>
                        <span class="ml-4 min-w-0 flex flex-col">
                            <span class="text-xs font-semibold tracking-wide uppercase text-gray-500">Business information</span>
                            <span class="text-sm text-gray-500">Penatibus eu quis ante.</span>
                        </span>
                    </a>
                </li>

                <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"></div>
                    <!-- Upcoming Step -->
                    <a href="#" class="relative flex items-start group">
                        <span class="h-9 flex items-center" aria-hidden="true">
                            <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                            </span>
                        </span>
                        <span class="ml-4 min-w-0 flex flex-col">
                            <span class="text-xs font-semibold tracking-wide uppercase text-gray-500">Theme</span>
                            <span class="text-sm text-gray-500">Faucibus nec enim leo et.</span>
                        </span>
                    </a>
                </li>

                <li class="relative">
                    <!-- Upcoming Step -->
                    <a href="#" class="relative flex items-start group">
                        <span class="h-9 flex items-center" aria-hidden="true">
                            <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                            </span>
                        </span>
                        <span class="ml-4 min-w-0 flex flex-col">
                            <span class="text-xs font-semibold tracking-wide uppercase text-gray-500">Preview</span>
                            <span class="text-sm text-gray-500">Iusto et officia maiores porro ad non quas.</span>
                        </span>
                    </a>
                </li>
            </ol>
        </nav>

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
