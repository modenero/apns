<template>
    <main class="p-5 sm:max-w-5xl sm:mx-auto">

        <div class="py-1 px-3 flex flex-row items-end justify-end bg-gray-100 border-2 border-gray-300 rounded-xl">
            <span class="text-xs">
                redirect: {{id}}
            </span>
        </div>

        <h1 class="mt-5 text-4xl text-center">Ads &amp; Referrals Handler (/r)</h1>


    </main>
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            id: null,
        }
    },
    methods: {
        //
    },
    created: function () {
        /* Set parameters. */
        const params = this.$route.params
        // console.log('REDIRECT (params):', params)

        /* Set ID. */
        this.id = params.id
        // console.log('REDIRECT (id):', this.id)
    },
    mounted: function () {
        //
    },
}
</script>
