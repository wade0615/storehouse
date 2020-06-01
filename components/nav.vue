<template>
    <header class="logo">
        <button class="active_sidebar" v-on:click='activeSidebar()'><i class="fas fa-bars"></i></button>
        <h1>{{ msg }}</h1>
        <b-dropdown id="dropdown-right" right text="其他" variant="primary" class="m-2">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
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