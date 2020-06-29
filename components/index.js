import Vue from 'vue'
import nav from './nav.vue'
import main from './main.vue'
import customCol from './customCol.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

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
        <main>
            <customColumn></customColumn>
            <maincontent v-for="content in contents" :content="content"></maincontent>
        </main>
    </div>`,
    components: { 
        navbar: nav,
        maincontent: main,
        customColumn: customCol,
    },
    mounted : function(){
        console.log('Hello Webpack and Vue !');  
    }
})