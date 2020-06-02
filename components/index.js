import Vue from 'vue'
import nav from './nav.vue'
import main from './main.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false //阻止啟動生產訊息

new Vue({
    el: '#app',
    data: {
        contents: [
            {
                id: 1,
                title: `I'm props title`
            },
            {
                id: 2,
                title: `I'm props title`
            },
            {
                id: 3,
                title: `I'm props title`
            }
        ],
    },
    template: 
    `<div>
        <navbar></navbar>
        <maincontent v-for="content in contents" :content="content"></maincontent>
    </div>`,
    components: { 
        navbar: nav,
        maincontent: main
    },
    mounted : function(){
        console.log('Hello Webpack and Vue !');  
    }
})