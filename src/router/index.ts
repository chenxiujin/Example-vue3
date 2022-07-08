import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import moduler from "@/modules/router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index" //使用redirect重定向，默认系统显示的第一页
  },
  {
    path: "/index",
    component: () => import("@/components/HelloWorld.vue"),
    meta: { title: "首页" }
  },
  // {
  //     path: '/line',
  //     component: () => import('@/components/line.vue'),
  //     meta: { title: '线条'}
  // },
  // {
  //     path: '/lifangti',
  //     component: () => import('@/components/lifangti.vue'),
  //     meta: { title: '立方体'}
  // },
  ...moduler
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
