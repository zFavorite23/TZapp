import Vue from "vue";
import VueRouter from "vue-router";

// 登录页
import login from "../views/login/login.vue";
// 首页
import home from "../views/home/home.vue";
// 现场测报
import report from "../views/report/report.vue";
// 现场测报点位
import site from "../views/site/site.vue";
// 全区测报信息
import message from "../views/message/message.vue";
import messageInfo from "../views/message/messageInfo.vue";
// 上报数据管理
import upload from "../views/upload/upload.vue";
import uploadInfo from "../views/upload/uploadInfo.vue";
import uploadEdit from "../views/upload/uploadEdit.vue";
// 历史数据查询
import history from "../views/history/history.vue";

const routes = [
  {
    path: "/", // path 设置为 “/” ，默认显示该页面
    component: login
  },
  {
    // 登录页
    path: "/login",
    component: login
  },

  {
    // 首页
    path: "/home",
    component: home
  },
  {
    // 现场测报
    path: "/report",
    component: report
  },
  {
    // 现场测报点位
    path: "/site",
    component: site
  },
  {
    // 全区测报信息
    path: "/message",
    component: message
  },
  {
    // 全区测报详情
    path: "/messageInfo",
    component: messageInfo
  },
  {
    // 上报数据管理
    path: "/upload",
    component: upload
  },
  {
    // 上报数据详情
    path: "/uploadInfo",
    component: uploadInfo
  },
  {
    // 上报数据修改
    path: "/uploadEdit",
    component: uploadEdit
  },
  {
    // 历史数据查询
    path: "/history",
    component: history,
    meta: {
      keepAlive: true // 组件缓存
    }
  }
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
