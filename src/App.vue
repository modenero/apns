<template>
    <main class="bg-white">
        <Header v-if="showHeader" />

        <router-view />

        <Footer v-if="showFooter" />
    </main>
</template>

<script>
/* Import components. */
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        Header,
        Footer,
    },
    data: () => {
        return {
            showHeader: null,
            showFooter: null,
        }
    },
    methods: {
        //
    },
    created: function () {
        /* Initailize header display. */
        this.showHeader = false

        /* Initailize footer display. */
        this.showFooter = false

        /* Wait until the next cycle. */
        setTimeout(() => {
            /* Set parameters. */
            const route = this.$route
            // console.log('APP (route):', route)

            const path = route.path
            // console.log('APP (path):', path)

            if (path && path.slice(0, 2) !== '/r') {
                this.showHeader = true
                this.showFooter = true
            }
        }, 10)

    },
    mounted: function () {
        //
    },
}
</script>

<style>
/*  */
</style>
