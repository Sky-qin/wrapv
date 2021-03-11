// import { createApp } from "vue";
// import ElementUI from 'element-ui';
// import App from './App.vue'
// import WrapV from '../packages';

// import 'element-ui/lib/theme-chalk/index.css';


// // createApp(App).mount('#app')


// const myApp = createApp(App)
// myApp.use(WrapV)
// myApp.use(ElementUI)
// myApp.mount("#app")


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
