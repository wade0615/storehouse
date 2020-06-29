<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
    // props: ['conten'],
    data () {
        return {
            title: 'custom Column',
        }
    },
    methods: {
        // mainfunc(){
        // }
    },
    beforeMount(){
        // this.mainfunc()
    },
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped src="./styles/customCol.sass"></style>