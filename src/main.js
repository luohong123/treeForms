/*
 * @Author: honghong
 * @Date: 2019-11-08 23:00:35
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-08 23:10:43
 * @Description: 
 * @email: 3300536651@qq.com
 */
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
Vue.use(Antd);
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')