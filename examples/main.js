import Vue from 'vue'
import App from './App.vue'
import WrapV from '../packages';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

Vue.use(WrapV)
Vue.use(ElementUI)

new Vue({
    render: h => h(App),
}).$mount('#app')