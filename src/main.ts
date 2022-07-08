import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { localeStore } from "@/store/locale";

const app = createApp(App);
app.use(router);
app.use(store);
const locale = localeStore();
const { localeMessage } = toRefs(locale);
app.config.globalProperties.localeMessage = localeMessage;
app.mount("#app");
