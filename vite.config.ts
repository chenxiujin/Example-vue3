import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vue3拓展，script标签可以添加name属性。eg: <script setup name="login" lang="ts"></script>
    VueSetupExtend(),
    // vue3拓展，setup语法不用再导入一些常用的VueAPI，比如ref、computed、watch等，可以直接使用这些api
    // eg: <script setup>const count = ref(0);onMounted(() => {console.log('mounted===')})</script>
    AutoImport({
      // 生成导入文件，可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
      dts: "src/auto-imports.d.ts",
      imports: ["vue"],
      // eslint报错解决
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    // 自动按需引入需要的组件
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  resolve: {
    alias: {
      // '@components': join(root, '/components'),
      "@": path.resolve(__dirname, "src") //在任何模块文件内部，可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径。
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "${path.join(__dirname, "src/assets/style/global.less")}"`
        }
      }
    }
  },
  build: {
    sourcemap: true,
    minify: false
  }
});
