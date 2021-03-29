(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{555:function(t,s,e){"use strict";e.r(s);var o=e(14),v=Object(o.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"插槽"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),e("p",[t._v("Vue 实现了一套"),e("strong",[t._v("内容分发的 API")]),t._v("，这套 API 的设计灵感源自 Web Components 规范草案，将 "),e("code",[t._v("<slot>")]),t._v(" 元素作为承载分发内容的出口。")]),t._v(" "),e("p",[t._v("slot 插槽，它让组件的实现变的更加灵活。我们平时在开发组件库的时候，为了让组件更加灵活可定制，经常用插槽的方式让用户可以自定义内容。插槽分为")]),t._v(" "),e("ul",[e("li",[t._v("具名插槽(普通插槽)")]),t._v(" "),e("li",[t._v("作用域插槽")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("编译作用域")]),t._v(" "),e("p",[t._v("父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。")])]),t._v(" "),e("p",[t._v("普通插槽是在父组件编译和渲染阶段生成 vnodes，所以数据的作用域是父组件实例，子组件渲染的时候直接拿到这些渲染好的 vnodes。而对于作用域插槽，父组件在编译和渲染阶段并不会直接生成 vnodes，而是在父节点 vnode 的 data 中保留一个 scopedSlots 对象，存储着不同名称的插槽以及它们对应的渲染函数，只有在编译和渲染子组件阶段才会执行这个渲染函数生成 vnodes，由于是在子组件环境执行的，所以对应的数据作用域是子组件实例。简单地说，两种插槽的目的都是让子组件 slot 占位符生成的内容由父组件来决定，但数据的作用域会根据它们 vnodes 渲染时机不同而不同。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("插槽就是一个返回 VNode 的函数而已。")])]),t._v(" "),e("li",[e("p",[t._v("普通插槽和作用域插槽根本就没有区别，因为普通插槽就是作用域插槽的子集，这也是 Vue 为什么将二者合并的原因。")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);