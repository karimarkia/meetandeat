import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import SocketService from './services/SocketService'

import '@/style/global.scss'

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false

var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDShd0E0PHGAI1El-o8JujHdEFicPQiSC4',
        libraries: 'places',
    },
})
 
//SocketService.emit('test event', 'this is a testing string');
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
