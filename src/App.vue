<template>
  <a-config-provider :locale="antDesignVueLocale">
    <router-view></router-view>
  </a-config-provider>
</template>

<script setup lang="ts">
import { localeStore } from "@/store/locale";
const locale = localeStore();
const { antDesignVueLocale } = toRefs(locale);
</script>
