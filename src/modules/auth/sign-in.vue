<template>
  <div>
    用户名：
    <input v-model="username" type="text" />
    密码：
    <input v-model="password" type="password" />
    <button type="button" @click="login">登录</button>
  </div>
</template>

<script setup name="SignIn" lang="ts">
import { Login, Account } from "./auth";
import { localeStore } from "@/store/locale";

// defineProps<{ msg: string }>()
// withDefaults(defineProps<any>(), {
//     msg: '给props默认值'
// })

// const emits = defineEmits<{
//   (e: 'changeMsg', value: string): void
// }>()
// const handleChangeMsg = () => {
//   emits('changeMsg', 'Hello TS')
// }

const locale = localeStore();

let username = ref("");
let password = ref("");

let login = () => {
  Login.loginAccount(Account.builder().addUsername(username.value).addPassword(password.value));
};
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
