<template>
    <header class="logo">
        <h1>{{ msg }}</h1>
        <button class="active_sidebar" v-on:click='activeSidebar()'><i class="fas fa-bars"></i></button>
        <div class="side_bar" :class="{active: isActive}">
            <ul>
                <li v-on:click='closeSidebar()'><span class="icon"><i class="fas fa-backspace"></i></span>返回</li>
                <li><span class="icon"><i class="fas fa-sign-in-alt"></i></span>登入</li>
                <li><span class="icon"><i class="fas fa-user-alt"></i></span>註冊</li>
                <li><span class="icon"><i class="fas fa-language"></i></span>切換語言</li>
                <li><span class="icon"><i class="fas fa-search-dollar"></i></span>幣別</li>
            </ul>
            <div v-on:click.stop='closeSidebar()'></div>
        </div>
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