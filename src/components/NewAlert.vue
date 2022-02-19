<template>
    <!-- Contact form -->
    <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
        <h3 class="text-xl font-medium text-warm-gray-900">
            Add a NEW Notfication Alert
        </h3>

        <form action="javascript://" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

            <div class="sm:col-span-2">
                <label for="contract-address" class="block text-sm font-medium text-warm-gray-900">
                    Contract Address
                </label>

                <div class="mt-1">
                    <input
                        type="text"
                        name="contract-address"
                        id="contract-address"
                        placeholder="Enter a contract address OR platform name"
                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div>
                <label for="first-name" class="block text-sm font-medium text-warm-gray-900">
                    First name
                </label>

                <div class="mt-1">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div>
                <label for="last-name" class="block text-sm font-medium text-warm-gray-900">Last name</label>

                <div class="mt-1">
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div>
                <label for="email" class="block text-sm font-medium text-warm-gray-900">Email</label>

                <div class="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div>
                <div class="flex justify-between">
                    <label for="phone" class="block text-sm font-medium text-warm-gray-900">Phone</label>
                    <span id="phone-optional" class="text-sm text-warm-gray-500">Optional</span>
                </div>

                <div class="mt-1">
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        autocomplete="tel"
                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        aria-describedby="phone-optional"
                    />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="subject" class="block text-sm font-medium text-warm-gray-900">
                    Subject
                </label>

                <div class="mt-1">
                    <input type="text" name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <div class="flex justify-between">
                    <label for="message" class="block text-sm font-medium text-warm-gray-900">Message</label>
                    <span id="message-max" class="text-sm text-warm-gray-500">Max. 500 characters</span>
                </div>

                <div class="mt-1">
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                        aria-describedby="message-max"
                    ></textarea>
                </div>
            </div>

            <div class="sm:col-span-2 sm:flex sm:justify-end">
                <button
                    type="submit"
                    class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
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
