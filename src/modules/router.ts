import authRouter from "./auth/router";
import type { RouteRecordRaw } from "vue-router";

const routers: Array<RouteRecordRaw> = [...authRouter];

export default routers;
