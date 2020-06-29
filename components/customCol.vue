<template>
  <section>
    <h2>{{ title }}</h2>
    <b-button-group>
      <b-button variant="success">col-6 col-6</b-button>
      <b-button variant="info">col-3 col-9</b-button>
      <b-button variant="warning">col-9 col-3</b-button>
    </b-button-group>
    <p class="row">
      <span>{{ loremText }}<img class="col-6" src="https://picsum.photos/300/300/" alt="">
      {{ loremText }}{{ loremText }}
      </span>
      <span>{{ loremText }}</span>
    </p>
  </section>
</template>

<script>
export default {
    data () {
        return {
            title: 'Custom Column',
            loremText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam veritatis blanditiis eaque error ipsum architecto quibusdam perspiciatis incidunt, expedita adipisci delectus accusantium est voluptatum qui earum pariatur voluptatibus quae iste minus ex reiciendis id? Fuga odio recusandae tempora fugiat aliquam velit, odit facilis pariatur rem deserunt quo eveniet unde iusto.',
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