<template>
    <div class="example">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: `I'll be the navbar.`
        }
    }
}
</script>

<style>
* {
    border: solid 1px black
}
.example {
    color: red;
}
</style>