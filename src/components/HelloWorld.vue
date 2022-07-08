<template>
  <div>
    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <button type="button" @click="gotoLogin">跳转登录</button>
    <button type="button" @click="localize(Locale.zh_CN)">{{ localeMessage.value.SIMPLIFIED_CHINESE }}</button>
    <button type="button" @click="localize(Locale.en_US)">{{ localeMessage.value.ENGLISH }}</button>
    <a-pagination :total="50" show-size-changer />
    <div class="site-config-provider-calendar-wrapper">
      <a-calendar :fullscreen="false" />
    </div>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { localeStore } from "@/store/locale";
import { Locale } from "@/i18n/extra/locale";
// defineProps<{ msg: string }>();
let router = useRouter();
let gotoLogin = () => {
  router.push("/sign-in");
};
const locale = localeStore();
const { localize } = toRefs(locale);
const count = ref(0);
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
