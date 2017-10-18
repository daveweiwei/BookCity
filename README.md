# vue_move

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 技术栈：
ES6  + vue2.0 + vue-router + Vuex + axios + Node + express + mongodb + mongoose + vue-cli

# express跨域:
cors模块
npm cors install --save

CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
设置响应头：
（1）Access-Control-Allow-Origin
该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。

（2）Access-Control-Request-Method
该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法，上例是PUT。

# vue-cli 临时跨域：
proxyTable: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
# mongodb 集合名必须的是复数的，否则mongoose会找复数的集合，这样就要强制指定用collection集合名

![架构图](http://a1.qpic.cn/psb?/V11FTuif2OYnQ5/9QFpxzx*Njg8CFjxC16c7c5n06CSXeak*izItwSs8ow!/b/dD4BAAAAAAAA&bo=aAT6AQAAAAADB7U!&rf=viewer_4)
