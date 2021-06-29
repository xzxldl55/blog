(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{565:function(e,t,a){"use strict";a.r(t);var r=a(14),l=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"模板编译与渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板编译与渲染"}},[e._v("#")]),e._v(" 模板编译与渲染")]),e._v(" "),a("h2",{attrs:{id:"模板转换成视图的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板转换成视图的过程"}},[e._v("#")]),e._v(" 模板转换成视图的过程")]),e._v(" "),a("ul",[a("li",[e._v("Vue.js 通过编译将 template 模板转换成渲染函数 render，执行渲染函数就可以得到一个虚拟节点树。")]),e._v(" "),a("li",[e._v("在对 Model 进行操作的时候，会触发对应 Dep 中的 Watcher 对象。Watcher 对象会调用对应的 update 来修改视图。这个过程主要是将新旧虚拟节点进行差异对比，然后根据对比结果进行 DOM 操作来更新视图。")])]),e._v(" "),a("p",[e._v("简单点讲，在 Vue 的底层实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合 Vue 自带的响应系统，在状态改变时，Vue 能够智能地计算出重新渲染组件的最小代价并应到 DOM 操作上。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/vue/%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91%E4%B8%8E%E6%B8%B2%E6%9F%931.png",alt:"模板编译与渲染1"}})]),e._v(" "),a("ul",[a("li",[e._v("渲染函数：渲染函数是用来生成 Virtual DOM 的。Vue 推荐使用模板来构建我们的应用界面，在底层实现中 Vue 会将模板编译成渲染函数，当然我们也可以不写模板，直接写渲染函数，以获得更好的控制。")]),e._v(" "),a("li",[e._v("VNode 虚拟节点：它可以代表一个真实的 dom 节点。通过 createElement 方法能将 VNode 渲染成 dom 节点。简单地说，vnode可以理解成节点描述对象，它描述了应该怎样去创建真实的DOM节点。")]),e._v(" "),a("li",[e._v("patch：虚拟DOM最核心的部分，它可以将 vnode 渲染成真实的 DOM，这个过程是对比新旧虚拟节点之间有哪些不同，然后根据对比结果找出需要更新的的节点进行更新。这点我们从单词含义就可以看出， patch 本身就有补丁、修补的意思，其实际作用是在现有 DOM 上进行修改来实现更新视图的目的。Vue 的 Virtual DOM Patching 算法是基于 Snabbdom 的实现，并在些基础上作了很多的调整和改进。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/vue/%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91%E4%B8%8E%E6%B8%B2%E6%9F%932.png",alt:"模板编译与渲染2"}})])])}),[],!1,null,null,null);t.default=l.exports}}]);