import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import _ from 'lodash'

import "./plugins/ant-design-vue";
import "ant-design-vue/dist/antd.css";

window._ = _

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
