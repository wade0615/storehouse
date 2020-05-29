<template>
    <header class="logo">
        <h1>{{ msg }}</h1>
        <button class="active_sidebar" v-on:click='activeSidebar()'><i class="fas fa-bars"></i></button>
        <div class="side_bar" :class="{active: isActive}" v-on:click='closeSidebar()'></div>
    </header>
</template>

<script>
export default {
    data () {
        return {
            msg: `Logo`,
            isActive: false
        }
    },
    methods: {
        activeSidebar(){
            console.log('your active');
            this.isActive = true
        },
        closeSidebar(){
            this.isActive = false
        }
    },
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped src="./styles/nav.sass"></style>