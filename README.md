# banchong

# TODO
* 列出完整的项目目录结构

## vue.config.js 配置
### baseUrl
配置站点的根子路径

### 目录别名
* src 目录缩写为 @
* components 目录的缩写为 _c

## 代码统一与自动格式化
### 代码风格统一插件 [EditorConfig](https://editorconfig.org/)
> EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.
* 设置 editor 为 uft-8 字符
* 缩进为4个空格
* 文件末尾自动添加新空白行
* 文件的换行符为lf

## vscode 代码根据eslint自动格式化
vscode 配置
```
// 配置自动格式化
"eslint.autoFixOnSave": true,

// 设置自动格式化的语言
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
        "language": "html",
        "autoFix": true
    },
    {
        "language": "vue",
        "autoFix": true
    }
]
```

eslint 配置
```
// 配置缩进为4个空格
'indent':[2,4],
```

## 项目环境变量设置
```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.development         # 只在指定的模式中被载入
.env.development.local   # 只在指定的模式中被载入，但会被 git 忽略
.env.production        # 只在指定的模式中被载入
.env.production.local   # 只在指定的模式中被载入，但会被 git 忽略
```
这里我们本地配置.env.development.local, 线上配置.env.production.local

## axios配置
安装
```
npm install --save axios vue-axios
```





<!--
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
``` -->


