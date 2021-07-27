(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{372:function(t,a,s){t.exports=s.p+"assets/img/shadowDOM.21905974.png"},425:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"shadow-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shadow-dom"}},[t._v("#")]),t._v(" shadow DOM")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("可以将一个隐藏的、独立的 DOM 附加到一个元素上。")])]),t._v(" "),n("li",[n("p",[t._v("Shadow DOM 允许将隐藏的 DOM 树附加到常规的 DOM 树中——它以 shadow root 节点为起始根节点，在这个根节点的下方，可以是任意元素，和普通的 DOM 元素一样。")]),t._v(" "),n("img",{attrs:{src:s(372),width:"600"}})]),t._v(" "),n("li",[n("p",[t._v("qiankun 中的样式隔离就是基于 shadow DOM 来实现的。")])]),t._v(" "),n("li",[n("p",[t._v("Shadow DOM 内部的元素始终不会影响到它外部的元素(除了 :focus-within)。")])])]),t._v(" "),n("h2",{attrs:{id:"shadow-dom-特有术语"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shadow-dom-特有术语"}},[t._v("#")]),t._v(" shadow DOM 特有术语")]),t._v(" "),n("ul",[n("li",[t._v("Shadow host：一个常规 DOM 节点，Shadow DOM 会被附加到这个节点上。")]),t._v(" "),n("li",[t._v("Shadow tree：Shadow DOM 内部的 DOM 树。")]),t._v(" "),n("li",[t._v("Shadow boundary：Shadow DOM 结束的地方，也是常规 DOM 开始的地方。")]),t._v(" "),n("li",[t._v("Shadow root: Shadow tree 的根节点。")])]),t._v(" "),n("h2",{attrs:{id:"基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),n("p",[n("code",[t._v("Element.attachShadow()")]),t._v(" ：将一个 shadow root 附加到任何一个元素上；接受一个配置对象作为参数，该对象有一个 mode 属性，值可以是 open 或者 closed")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// open 表示可以通过页面内的 JavaScript 方法来获取 Shadow DOM")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" shadow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elementRef"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"open"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false 表示不可以从外部获取 Shadow DOM")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" shadow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elementRef"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"closed"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("可以使用同样的方式来操作 Shadow DOM，就和操作常规 DOM 一样,例如添加子节点、设置属性，以及为节点添加自己的样式（例如通过 element.style 属性），或者为整个 Shadow DOM 添加样式（例如在 style 元素内添加样式）")])])}),[],!1,null,null,null);a.default=e.exports}}]);