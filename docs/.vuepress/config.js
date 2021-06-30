module.exports = {
  base: "/notes/",
  title: "知食",
  description: "拾柒",
  dest: "./dist",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [["link", { rel: "icon", href: "/logo-2.jpeg" }]],
  theme: "",
  port: 9000,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "VuePress", link: "https://vuepress.vuejs.org/zh/" },
    ],
    sidebar: [
      {
        title: "JS相关",
        path: "/js",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/js/原型和原型链",
          "/js/继承",
          "/js/new操作符",
          "/js/call-apply-bind",
          "/js/闭包",
          "/js/作用域和作用域链",
          "/js/let、const和var的区别",
          "/js/深浅拷贝",
          "/js/防抖和节流",
          "/js/Promise",
          "/js/数组相关",
          "/js/Object与Map的异同及使用场景",
          "/js/shadow DOM",
          "/js/宏任务和微任务",
        ],
      },
      {
        title: "VUE相关",
        path: "/vue",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/vue/Vue和react对比",
          "/vue/生命周期",
          "/vue/双向绑定",
          "/vue/Vue组件data为什么必须是函数？",
          "/vue/Vue中props、data、computed加载顺序",
          "/vue/Vue初次渲染过程",
          "/vue/Vue组件patch过程",
          "/vue/为什么要异步更新&&nextTick",
          "/vue/computed VS methods VS watch",
          "/vue/v-show&&v-if",
          "/vue/为什么v-if和v-for不建议一起用",
          "/vue/组件通讯",
        ],
      },
      {
        title: "React相关",
        path: "/react",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/react/生命周期",
          "/react/setState",
          "/react/调用super的目的",
        ],
      },
      {
        title: "CSS相关",
        path: "/css",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/css/代码实现",
          "/css/清除浮动",
          "/css/手写动画",
          "/css/BFC",
          "/css/link 和@import ",
          "/css/margin塌陷&合并",
          "/css/rgba()和 opacity",
          "/css/重绘和重排",
        ],
      },
      {
        title: "打包相关",
        path: "/打包相关",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/打包相关/webpack和gulp的区别",
          "/打包相关/webpack loader 怎么理解",
          "/打包相关/webpack plugin 怎么理解",
        ],
      },
      {
        title: "网络相关",
        path: "/网络",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/网络/对称加密和非对称加密区别",
          "/网络/七层网络模型",
          "/网络/tcp",
          "/网络/http",
          "/网络/强缓存和协商缓存",
          "/网络/浏览器存储",
          "/网络/浏览器渲染过程",
        ],
      },
      {
        title: "其他",
        path: "/其他",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/其他/说说你对SPA的理解",
          "/其他/SPA首屏加载速度慢的怎么解决",
        ],
      },
      {
        title: "面经",
        path: "/面经",
        collapsable: true,
        sidebarDepth: 1,
        children: ["/面经/0628来未来", "/面经/0630爱库存"],
      },
      {
        title: "面试",
        path: "/mianshi",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/mianshi/JS/数据类型",
          "/mianshi/JS/作用域和作用域链",
          "/mianshi/JS/闭包",
          "/mianshi/JS/原型和原型链",
          "/mianshi/JS/this的指向",
          "/mianshi/JS/call-apply-bind",
          "/mianshi/JS/new操作符",
          "/mianshi/JS/继承",
          "/mianshi/JS/深浅拷贝",
          "/mianshi/JS/Promise",
          "/mianshi/JS/instanceof",
          "/mianshi/JS/常用的方法",
          "/mianshi/JS/数组",
          "/mianshi/算法/",
        ],
      },
    ],
    lastUpdated: "上次更新",
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "vuepress-plugin-zooming",
      {
        selector: ".page img",
        delay: 1000,
        options: {
          bgColor: "black",
          zIndex: 10000,
        },
      },
    ],
  ],
};
