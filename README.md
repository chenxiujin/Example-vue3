# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

### Prettier config
``` JSON
{
    "printWidth": "80, 超过最大值换行", 
    "tabWidth": "4, 缩进字节数",
    "useTabs": "true, 缩进不使用tab,使用空格",
    "semi": "true, 句尾添加分号",
    "singleQuote": "true, 使用单引号代替双引号",
    "quoteProps": "as-needed, 对象的key是否用引号括起来,有三种选项 as-needed|consistent|preserve",
    "jsxSingleQuote": "true, 在jsx中使用单引号代替双引号",
    "trailingComma": "none, 选项:none|es5|all, 在对象或数组最后一个元素后面是否加逗号(在ES5中加尾逗号)", 
    "bracketSpacing": "true, 是否在对象的{}内部两侧加空格 true - { foo: bar } false - {foo: bar}.",
    "jsxBracketSameLine": "false, 在jsx中把'>' 是否单独放一行", 
    "arrowParens": "avoid, (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid,省略括号 ",
    "rangeStart": "0, 仅格式化选中文本 选中文本格式化的起始位置",
    "rangeEnd": "选中文本格式化的结束位置",
    "parser": "babylon, 格式化的解析器,默认是babylon,会自动根据输入文件推断，不用更改设置",
    "requirePragma": "false, 若为true,文件顶部加了 /*** @prettier */或/*** @format */的文件才会被格式化",
    "insertPragma": "false, 当requirePragma参数为true时,此参数为true将向@format标记后面添加一个换行符",
    "proseWrap": "preserve, 有效选项[always|never|preserve]。当Markdown文本超过printWidth时,是否换行,always-换行 never-不换行 preserve保持原样",
    "endOfLine": "lf, 结尾是 lf-\n cr-\r lfcr-\n\r  auto-保持现有的行尾设置",
    "htmlWhitespaceSensitivity": "css, 是否显示HTML文件中的空格。有效选项: 'css' - 尊重CSS display属性的设置。 'strict' - 空格被认为是敏感的。 'ignore' - 空格被认为是不敏感的",
    "vueIndentScriptAndStyle": "false, 是否给vue中的 <script> and <style>标签加缩进",
    "embeddedLanguageFormatting": "auto, 是否格式化嵌入到JS中的html标记的代码段或者Markdown语法 auto-格式化 off-不格式化"
}
```
