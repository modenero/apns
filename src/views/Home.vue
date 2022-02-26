<template>
    <main class="overflow-hidden">
        <Intro />

        <Creator />

        <Contact />
    </main>
</template>

<script>
/* Import components. */
import Contact from '@/components/Contact'
import Creator from '@/components/Creator'
import Intro from '@/components/Intro'

export default {
    components: {
        Contact,
        Creator,
        Intro,
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
