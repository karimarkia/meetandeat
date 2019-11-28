import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/style/global.scss'

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDShd0E0PHGAI1El-o8JujHdEFicPQiSC4',
        libraries: 'places',
    },
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')