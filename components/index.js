import Vue from 'vue'
import nav from './nav.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

Vue.config.productionTip = false //阻止啟動生產訊息

new Vue({
    el: '#app',
    template: 
    `<div>
        <navbar></navbar>
    </div>`,
    components: { 
        navbar: nav
    },
    mounted : function(){
        console.log('Hello Webpack and Vue !');  
    }
})