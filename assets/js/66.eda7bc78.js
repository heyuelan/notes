(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{442:function(t,e,a){"use strict";a.r(e);var c=a(26),s=Object(c.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"为什么要异步更新-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要异步更新-nexttick"}},[t._v("#")]),t._v(" 为什么要异步更新&&nextTick")]),t._v(" "),a("h2",{attrs:{id:"为什么要异步更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要异步更新"}},[t._v("#")]),t._v(" 为什么要异步更新")]),t._v(" "),a("p",[t._v("Vue 在修改 data 中的数据之后修改视图的过程为：setter -> Dep -> Watcher -> patch -> 视图。")]),t._v(" "),a("p",[t._v("一些循环调用的方法，如果每次执行都更新视图，比较低效，所以在默认情况下，每次触发某个数据的 setter 方法后，对应的 Watcher 对象其实会被 push 进一个队列 queue 中，在下一个 tick 的时候将这个队列 queue 全部拿出来 run（ Watcher 对象的一个方法，用来触发 patch 操作） 一遍。")]),t._v(" "),a("p",[a("strong",[t._v("nextTick 本质是一种优化策略。")])]),t._v(" "),a("h3",{attrs:{id:"什么是下一个-tick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是下一个-tick"}},[t._v("#")]),t._v(" 什么是下一个 tick？")]),t._v(" "),a("p",[t._v("Vue.js 实现了一个 nextTick 函数，传入一个 cb，这个 cb 会被存储到一个队列中，在下一个 tick 时触发队列中的所有 cb 事件。")]),t._v(" "),a("h3",{attrs:{id:"为什么在一个-tick-中可以跑完所有-而不影响下一个-tick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么在一个-tick-中可以跑完所有-而不影响下一个-tick"}},[t._v("#")]),t._v(" 为什么在一个 tick 中可以跑完所有，而不影响下一个 tick？")]),t._v(" "),a("p",[t._v("会有一个 pending 标记位，如果 pending 为 false，则将 pending 置为 true，并延时依次执行所有的 cb.")]),t._v(" "),a("h3",{attrs:{id:"每个-tick-的队列是怎么排布的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每个-tick-的队列是怎么排布的"}},[t._v("#")]),t._v(" 每个 tick 的队列是怎么排布的？")]),t._v(" "),a("p",[t._v("存放带 ID 的 watcher。执行循环操作时，我们不需要执行多个同样的 watcher 去修改界面，所以同一个的 Watcher 在同一个 tick 的时候应该只被执行一次（以 ID 作为标识，若队列中还没有这个 watcher，才 push 进去）。")]),t._v(" "),a("h2",{attrs:{id:"nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[t._v("#")]),t._v(" nextTick")]),t._v(" "),a("p",[t._v("使用场景：如果想要在修改数据后立刻得到更新后的 DOM 结构，可以使用 Vue.nextTick()")]),t._v(" "),a("p",[t._v("传入一个 cb,这个 cb 会被存储到下一个队列中，在下一个 tick 中执行队列中所有的 cb 事件。")]),t._v(" "),a("p",[t._v("Vue.js 源码中分别用 Promise、setTimeout、setImmediate 等方式在 microtask（或是 task）中创建一个事件，目的是在当前调用栈执行完毕以后（不一定立即）才会去执行这个事件。")]),t._v(" "),a("h2",{attrs:{id:"nexttick-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-原理"}},[t._v("#")]),t._v(" nextTick 原理")]),t._v(" "),a("ul",[a("li",[t._v("把回调函数放入 callbacks 等待执行")]),t._v(" "),a("li",[t._v("将执行函数放到微任务或者宏任务中")]),t._v(" "),a("li",[t._v("事件循环到了微任务或者宏任务，执行函数依次执行 callbacks 中的回调")])])])}),[],!1,null,null,null);e.default=s.exports}}]);