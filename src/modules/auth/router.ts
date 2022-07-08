import type { RouteRecordRaw } from "vue-router";

const routers: Array<RouteRecordRaw> = [
  {
    path: "/sign-in",
    component: () => import("@/modules/auth/sign-in.vue"),
    meta: { title: "登录" }
  }
];

export default routers;
