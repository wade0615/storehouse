import nav from './nav.vue'

Vue.config.productionTip = false //阻止啟動生產訊息

new Vue({
    el: '#app',
    template: 
    `<div>
        <navbar></navbar>
    </div>`,
    components: { 
        navbar: nav
    }
})