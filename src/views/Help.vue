<template>
    <main>
        <div class="bg-blue-gray-50">
            <!-- Cards -->
            <section class="mt-32 max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8" aria-labelledby="contact-heading">
                <h2 class="sr-only" id="contact-heading">Contact us</h2>

                <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                        <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                            <div class="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                                <!-- Heroicon name: outline/phone -->
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>

                            <h3 class="text-xl font-medium text-blue-gray-900">
                                Documentation
                            </h3>

                            <p class="mt-4 text-base text-blue-gray-500">
                                Our documenation will take you step-by-step through creating and managing your DeFi alerts.
                            </p>
                        </div>

                        <div class="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                            <a href="https://docs.apns.io" target="_blank" class="text-base font-medium text-blue-700 hover:text-blue-600">
                                Open the APNS docs<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                        <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                            <div class="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                                <!-- Heroicon name: outline/support -->
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </div>

                            <h3 class="text-xl font-medium text-blue-gray-900">
                                Twitter
                            </h3>

                            <p class="mt-4 text-base text-blue-gray-500">
                                You are always welcome to direct message our team 24x7x365 for help and support with using this service.
                            </p>
                        </div>

                        <div class="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                            <a href="https://twitter.com/APNS_io" target="_blank" class="text-base font-medium text-blue-700 hover:text-blue-600">
                                Open our Twitter page<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                        <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                            <div class="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                                <!-- Heroicon name: outline/newspaper -->
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                    />
                                </svg>
                            </div>

                            <h3 class="text-xl font-medium text-blue-gray-900">
                                Developer Resources
                            </h3>

                            <p class="mt-4 text-base text-blue-gray-500">
                                Please visit our GitHub repo for code samples and greater details on integrating with our Open API.
                            </p>
                        </div>

                        <div class="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                            <a href="https://github.com/modenero/apns" target="_blank" class="text-base font-medium text-blue-700 hover:text-blue-600">
                                Open our GitHub page<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ -->
            <section class="max-w-md mx-auto py-24 px-4 divide-y-2 divide-blue-gray-200 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8" aria-labelledby="faq-heading">
                <h2 class="text-3xl font-extrabold text-blue-gray-900" id="faq-heading">Frequently asked questions</h2>
                <div class="mt-6 pt-10">
                    <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
                        <div>
                            <dt class="text-lg font-medium text-blue-gray-900">What&#039;s the best thing about Switzerland?</dt>
                            <dd class="mt-2 text-base text-blue-gray-500">I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                        </div>

                        <div>
                            <dt class="text-lg font-medium text-blue-gray-900">Why do you never see elephants hiding in trees?</dt>
                            <dd class="mt-2 text-base text-blue-gray-500">Because they&#039;re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                        </div>

                        <div>
                            <dt class="text-lg font-medium text-blue-gray-900">How do you make holy water?</dt>
                            <dd class="mt-2 text-base text-blue-gray-500">You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                        </div>

                        <div>
                            <dt class="text-lg font-medium text-blue-gray-900">Why can&#039;t you hear a pterodactyl go to the bathroom?</dt>
                            <dd class="mt-2 text-base text-blue-gray-500">Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                        </div>

                        <div>
                            <dt class="text-lg font-medium text-blue-gray-900">What do you call someone with no body and no nose?</dt>
                            <dd class="mt-2 text-base text-blue-gray-500">Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                        </div>

                        <div>
                            <dt class="text-lg font-medium text-blue-gray-900">Why did the invisible man turn down the job offer?</dt>
                            <dd class="mt-2 text-base text-blue-gray-500">He couldn&#039;t see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </div>

        <!-- CTA Section -->
        <section class="relative bg-white mb-32" aria-labelledby="join-heading">
            <div class="hidden absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:block" aria-hidden="true"></div>

            <div class="max-w-7xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8">
                <div class="lg:grid lg:grid-cols-12">
                    <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                        <div class="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" aria-hidden="true"></div>

                        <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                            <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                                <img
                                    class="object-cover object-center rounded-3xl shadow-2xl"
                                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div class="relative bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                        <div class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                            <svg class="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" class="text-blue-500" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>

                            <svg class="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" class="text-blue-500" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                        </div>

                        <div class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                            <h2 class="text-3xl font-extrabold text-white" id="join-heading">
                                Join our team
                            </h2>

                            <p class="text-lg text-white">
                                Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
                            </p>

                            <a class="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-blue-gray-50 sm:inline-block sm:w-auto" href="#">
                                Explore open positions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
