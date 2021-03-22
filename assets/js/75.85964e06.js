(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{526:function(t,a,r){"use strict";r.r(a);var v=r(14),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"撸码点滴"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#撸码点滴"}},[t._v("#")]),t._v(" 撸码点滴")]),t._v(" "),r("h2",{attrs:{id:"vue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),r("h3",{attrs:{id:"通过-v-html-渲染富文本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通过-v-html-渲染富文本"}},[t._v("#")]),t._v(" 通过 v-html 渲染富文本")]),t._v(" "),r("p",[t._v("可能会导致xss攻击")]),t._v(" "),r("p",[r("code",[t._v("v-html")]),t._v(" 更新的是元素的 innerHTML 。内容按普通 HTML 插入， 不会作为 Vue 模板进行编译 。")]),t._v(" "),r("p",[t._v("但是有的时候我们需要渲染的 html 片段中有插值表达式，或者按照Vue模板语法给dom元素绑定了事件。")]),t._v(" "),r("p",[t._v("在单文件组件里，scoped 的样式不会应用在 "),r("code",[t._v("v-html")]),t._v(" 内部，因为那部分 HTML 没有被 Vue 的模板编译器处理。如果你希望针对 "),r("code",[t._v("v-html")]),t._v(" 的内容设置带作用域的  CSS，你可以替换为 CSS Modules 或用一个额外的全局 "),r("code",[t._v("<style>")]),t._v(" 元素手动设置类似 BEM 的作用域策略。")]),t._v(" "),r("p",[t._v("后台返回的 html 片段，以及 css 样式和 js，但是返回的 js 是不执行的，因为浏览器在渲染的时候并没有将 js 渲染，这时要在 $nextTick 中动态创建 script 标签并插入")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/lj1530562965/article/details/108790220",target:"_blank",rel:"noopener noreferrer"}},[t._v("处理v-html的潜在XSS风险"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" JS")]),t._v(" "),r("h3",{attrs:{id:"for-for-in-for-of-foreach-map对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-for-in-for-of-foreach-map对比"}},[t._v("#")]),t._v(" for, for...in, for...of, forEach, map对比")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("for")]),t._v(" "),r("ul",[r("li",[t._v("可遍历数组，字符串。不可遍历自定义或原型链上的自定义属性")])])]),t._v(" "),r("li",[r("p",[t._v("forEach")]),t._v(" "),r("ul",[r("li",[t._v("只能遍历数组。不可遍历自定义或原型链上的自定义属性。forEach 从头遍历到尾，不能使用 break、continue 跳出循环体，for 可以。")])])]),t._v(" "),r("li",[r("p",[t._v("for...in(key)")]),t._v(" "),r("ul",[r("li",[t._v("可遍历对象，数组，字符串。以原始插入顺序访问对象的可枚举属性，包括从原型继承而来的可枚举属性。"),r("strong",[t._v("可遍历自定义或原型链上的自定义属性")]),t._v("。遍历数组时不一定会按照数组的索引顺序，更适合遍历对象。当不想遍历原型链上的属性时可使用 Object.hasOwnProperty() 过滤自身以外的属性。")])])]),t._v(" "),r("li",[r("p",[t._v("for...of(value)[常用]")])]),t._v(" "),r("li",[r("p",[t._v("ES6 中引入，以替代 for...in 和 forEach ，并支持新的迭代协议。允许遍历数组，字符串，Map（映射），Set（集合），TypedArray，arguments对象等可迭代的数据结构。不可遍历自定义或原型链上的自定义属性。根据值遍历，弥补 for...in 不能根据值遍历的不足，ES6语法，兼容性不好。")])]),t._v(" "),r("li",[r("p",[t._v("map")]),t._v(" "),r("ul",[r("li",[t._v("只能遍历数组，不可遍历自定义或原型链上的自定义属性。map 返回一个新数组，新数组的内容是回调函数的返回值，可以用来克隆数组。")])])])]),t._v(" "),r("h3",{attrs:{id:"四种相等性算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四种相等性算法"}},[t._v("#")]),t._v(" 四种相等性算法")]),t._v(" "),r("ul",[r("li",[t._v("严格相等比较 ===, indexOf, lastIndexOF 认为NaN与NaN不等，+0与-0相等")]),t._v(" "),r("li",[t._v("非严格相等比较 ==")]),t._v(" "),r("li",[t._v("同值零 Set,Map,include等 认为NaN与NaN相等，+0与-0相等")]),t._v(" "),r("li",[t._v("同值 Object.is 认为NaN与NaN相等，+0与-0不等")])])])}),[],!1,null,null,null);a.default=e.exports}}]);