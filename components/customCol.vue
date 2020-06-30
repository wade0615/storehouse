<template>
  <section>
    <h2>{{ title }}</h2>
    <b-button-group>
      <b-button variant="success" @click='col_6();inner_html();'>col-6 col-6</b-button>
      <b-button variant="info" @click='col_4();inner_html();'>col-4 col-8</b-button>
      <b-button variant="warning" @click='col_3();inner_html();'>col-3 col-9</b-button>
    </b-button-group>
    <input type="file" id="file_uploader" accept="image/*" @change='get_file();'></input>
    <p id="article" class="row">
      <span>{{ loremText }}<img id="article_img" class="col-12 col-sm-6" src="https://picsum.photos/300/300/" alt="" data-target="image-preview">
      {{ loremText }}{{ loremText }}
      </span>
      <span>{{ loremText }}{{ loremText }}</span>
      <span>{{ loremText }}{{ loremText }}</span>
      <span>{{ loremText }}{{ loremText }}</span>
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
        col_6(){
          console.log('col-6')
          let articleImg = document.querySelector('#article_img')
          articleImg.setAttribute("class", "col-12 col-sm-6");
        },
        col_4(){
          console.log('col-4')
          let articleImg = document.querySelector('#article_img')
          articleImg.setAttribute("class", "col-12 col-sm-6 col-md-4");
        },
        col_3(){
          console.log('col-3')
          let articleImg = document.querySelector('#article_img')
          articleImg.setAttribute("class", "col-12 col-sm-6 col-md-4 col-lg-3");
        },
        inner_html(){
          console.log('innerHTML')
          let article = document.querySelector('#article')
          console.log(article.innerHTML)
        },
        get_file(){
          let data = document.querySelector('#file_uploader')
          console.log(data.value)
          console.log(data.files[0])
          this.showPreviewImage(data.files[0])
        },
        showPreviewImage(fileObj) {
          const imagePreview = document.querySelector('[data-target="image-preview"]');
          const image = URL.createObjectURL(fileObj);
          imagePreview.src = image;
        }
    },
    beforeMount(){
    },
}
</script>

<style rel="stylesheet/sass" lang="sass" scoped src="./styles/customCol.sass"></style>