<template>
    <main>
        <h2>{{ content.id }}. {{ content.title }}</h2>
        <p>{{ msg }}</p>
    </main>
</template>

<script>
export default {
    props: ['content'],
    data () {
        return {
            msg: `Main content`
        }
    },
    methods: {
        mainfunc(){
            console.log('main.vue active');
        }
    },
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped src="./styles/main.sass"></style>