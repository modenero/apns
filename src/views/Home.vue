<template>
    <main class="overflow-hidden">
        <Intro />

        <Create />

        <Contact />
    </main>
</template>

<script>
/* Import components. */
import Contact from '@/components/Contact'
import Create from '@/components/Create'
import Intro from '@/components/Intro'

export default {
    components: {
        Contact,
        Create,
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
