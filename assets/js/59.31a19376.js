(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{429:function(t,e,n){"use strict";n.r(e);var a=n(26),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"patch-过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#patch-过程"}},[t._v("#")]),t._v(" patch 过程")]),t._v(" "),n("p",[t._v("组件化的实现过程就是一个递归 new Vue 的过程， new Vue 后就是一个 init -> render -> patch 的过程， 而 patch 就是把 render 生成的 vnode 转换成真实 DOM 的过程，vnode 又分普通的 vnode 和组件 vnode，patch 过程中遇到了组件 vnode， 就会根据这个组件 vnode 再次执行 new Vue 的过程。")]),t._v(" "),n("p",[t._v("patch 的核心："),n("strong",[t._v("diff 算法")]),t._v("（diff 算法是通过同层的树节点进行比较而非对树进行逐层搜索遍历的方式，所以时间复杂度只有 O(n)）")])])}),[],!1,null,null,null);e.default=r.exports}}]);