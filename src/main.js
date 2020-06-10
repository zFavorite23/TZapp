import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import AMap from "vue-amap"; // 高德地图
import BaiduMap from "vue-baidu-map"; // 百度地图
import "./style/index.css"; // 引入全局公共样式
import "./utils/register-vant"; // 引入vant组件
import "amfe-flexible"; // 引入REM基准值
import "lib-flexible";
// 时间过滤
import * as filters from "../filters";

Object.keys(filters).forEach(name => {
  Vue.filter(name, filters[name]);
});

import "element-ui/lib/theme-chalk/index.css";
// 引入axios
import axios from "axios";
// 设置axios的常态地址;
axios.defaults.baseURL = "http://36.112.142.8";

Vue.use(AMap);
Vue.use(Element);

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "OQyvGjUa8Ied3iu6kGqQBI7zKIySiGaG"
});
Vue.config.productionTip = false;

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: "d6b55f61cb80dff2e82326db0a3f7c75",
  // 插件集合 （插件按需引入）
  plugin: ["AMap.Geolocation"]
});

// 将axios共享给所有实例使用
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  let isLogin = window.sessionStorage.getItem("token");
  // console.log(isLogin);
  if (isLogin) {
    //如果用户信息存在则往下执行。
    next();
  } else {
    //如果用户token不存在则跳转到login页面
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
