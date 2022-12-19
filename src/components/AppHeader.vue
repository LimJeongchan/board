<template>
    <div>
        <header>
            {{propsdata}}
        </header>
    </div>
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
    components: {HelloWorld},
    data() {
        return {
            propsdata: 'Header!!!'
        }
    },
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>