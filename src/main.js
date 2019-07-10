import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false
/*****配置环信******/
// 1. 安装并引入环信SDK
import websdk from 'easemob-websdk'
import { config } from './assets/imConfig/WebIMConfig'
let WebIM = window.WebIM = websdk;
WebIM.config=config;
Vue.prototype.WebIM = WebIM;

// 2. 创建连接
const conn = new WebIM.connection({
  isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
  https: typeof WebIM.config.https === 'boolean' ? WebIM.config.https : location.protocol === 'https:',
  url: WebIM.config.xmppURL,
  heartBeatWait: WebIM.config.heartBeatWait,
  autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
  autoReconnectInterval: WebIM.config.autoReconnectInterval,
  apiUrl: WebIM.config.apiURL,
  isAutoLogin: true
});
// 3. 把链接对象扩展给Vue实例属性(以后可以用this.myCon代表环信链接对象)
Vue.prototype.myCon = conn;
/*******配置环信结束***********/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
