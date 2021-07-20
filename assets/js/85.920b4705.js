(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{463:function(t,e,v){"use strict";v.r(e);var _=v(26),d=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"vue-生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期"}},[t._v("#")]),t._v(" Vue 生命周期")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("生命周期")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("beforeCreate")]),t._v(" "),v("td",[t._v("执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务")])]),t._v(" "),v("tr",[v("td",[t._v("created")]),t._v(" "),v("td",[t._v("组件初始化完毕，各种数据可以使用，常用于异步数据获取")])]),t._v(" "),v("tr",[v("td",[t._v("beforeMount")]),t._v(" "),v("td",[t._v("未执行渲染、更新，dom 未创建")])]),t._v(" "),v("tr",[v("td",[t._v("mounted")]),t._v(" "),v("td",[t._v("初始化结束，dom 已创建，可用于获取访问数据和 dom 元素")])]),t._v(" "),v("tr",[v("td",[t._v("beforeUpdate")]),t._v(" "),v("td",[t._v("更新前，可用于获取更新前各种状态")])]),t._v(" "),v("tr",[v("td",[t._v("updated")]),t._v(" "),v("td",[t._v("更新后，所有状态已是最新")])]),t._v(" "),v("tr",[v("td",[t._v("beforeDestroy")]),t._v(" "),v("td",[t._v("销毁前，可用于一些定时器或订阅的取消")])]),t._v(" "),v("tr",[v("td",[t._v("destroyed")]),t._v(" "),v("td",[t._v("组件已销毁，作用同上")])])])]),t._v(" "),v("h2",{attrs:{id:"数据请求在-created-和-mouted-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据请求在-created-和-mouted-的区别"}},[t._v("#")]),t._v(" 数据请求在 created 和 mouted 的区别")]),t._v(" "),v("ul",[v("li",[t._v("created 是在组件实例一旦创建完成的时候立刻调用，这时候页面 dom 节点并未生成")]),t._v(" "),v("li",[t._v("mounted 是在页面 dom 节点渲染完毕之后就立刻执行的触发时机上 created 是比 mounted 要更早的")]),t._v(" "),v("li",[t._v("相同点：都能拿到实例对象的属性和方法")]),t._v(" "),v("li",[v("strong",[t._v("放在 mounted 请求有可能导致页面闪动（页面 dom 结构已经生成），但如果在页面加载前完成则不会出现此情况")])])])])}),[],!1,null,null,null);e.default=d.exports}}]);