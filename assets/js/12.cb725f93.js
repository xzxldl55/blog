(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{463:function(t,a,r){"use strict";r.r(a);var e=r(14),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"bfc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),r("p",[t._v("块级格式化上下文(Block formatting contexts)。它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。通俗的讲，就是一个特殊的块，内部有自己的布局方式，不受外边元素的影响。")]),t._v(" "),r("p",[t._v("在 BFC 中，在包含块内一个盒子一个盒子不重叠地垂直排列，两个兄弟盒子直接的垂直距离由 margin 决定。浮动也是如此（虽然有可能两个盒子的距离会因为 floats 而变小），除非该盒子再创建一个新 BFC。")]),t._v(" "),r("h2",{attrs:{id:"原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),r("p",[t._v("BFC 原理，渲染规则：")]),t._v(" "),r("ul",[r("li",[t._v("内部的 Box 会在垂直方向一个个排列")]),t._v(" "),r("li",[t._v("垂直方向上的距离由 margin 决定。（完整的说法是：属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠（塌陷），与方向无关。margin 水平方向不会发生重叠）")]),t._v(" "),r("li",[t._v("每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明 BFC 中子元素不会超出他的包含块，而 position 为 absolute 的元素可以超出他的包含块边界）")]),t._v(" "),r("li",[t._v("BFC 的区域不会与 float 的元素区域重叠")]),t._v(" "),r("li",[t._v("计算 BFC 的高度时，浮动子元素也参与计算")]),t._v(" "),r("li",[t._v("BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然")])]),t._v(" "),r("h2",{attrs:{id:"产生条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#产生条件"}},[t._v("#")]),t._v(" 产生条件")]),t._v(" "),r("p",[t._v("以下条件会创建新的 BFC：")]),t._v(" "),r("ul",[r("li",[t._v("根元素")]),t._v(" "),r("li",[t._v("float 属性不为 none(脱离文档流，浮动元素)")]),t._v(" "),r("li",[t._v("position 属性为 absolute 或 fixed (绝对与固定定位)")]),t._v(" "),r("li",[t._v("display 属性为 inline-block、table-cell、table-caption、flex、inline-flex、grid、inline-grid、flow-root(最佳，无副作用)，定义成块级的非块级元素。")]),t._v(" "),r("li",[t._v("overflow 属性不为 visible（- overflow: auto/ hidden)，非溢出的可见元素。")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("是这些元素创建了块格式化上下文，它们本身不是块格式化上下文。")])]),t._v(" "),r("h2",{attrs:{id:"使用-bfc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-bfc"}},[t._v("#")]),t._v(" 使用 BFC")]),t._v(" "),r("h3",{attrs:{id:"自适应两栏布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自适应两栏布局"}},[t._v("#")]),t._v(" 自适应两栏布局")]),t._v(" "),r("p",[t._v("利用 BFC 的这一个原理就可以实现两栏布局，左边定宽，右边自适应。不会相互影响，哪怕高度不相等。BFC 的区域不会和浮动区域重叠，所以就可以把侧边栏固定宽度且左浮动，而对右侧内容触发 BFC，使得它的宽度自适应该行剩余宽度。")]),t._v(" "),r("h3",{attrs:{id:"解决垂直外边距重叠问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决垂直外边距重叠问题"}},[t._v("#")]),t._v(" 解决垂直外边距重叠问题")]),t._v(" "),r("p",[t._v("防止垂直 margin 合并")]),t._v(" "),r("ul",[r("li",[t._v("父子元素垂直外边距重叠问题")]),t._v(" "),r("li",[t._v("相邻元素垂直外边距重叠问题")])]),t._v(" "),r("p",[t._v("同一个 BFC 下的垂直 margin 会发生合并。所以如果让 2 个元素不在同一个 BFC 中即可阻止垂直 margin 合并。")]),t._v(" "),r("h3",{attrs:{id:"清除内部浮动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#清除内部浮动"}},[t._v("#")]),t._v(" 清除内部浮动")]),t._v(" "),r("p",[t._v("浮动造成的问题就是父元素高度坍塌，所以清除浮动需要解决的问题就是让父元素的高度恢复正常。而用 BFC 清除浮动的原理就是：计算 BFC 的高度时，浮动元素也参与计算。只要触发父元素的 BFC 即可。")]),t._v(" "),r("ul",[r("li",[t._v("浮动元素造成父元素高度坍塌问题")]),t._v(" "),r("li",[t._v("兄弟间，浮动元素与不浮动元素界限不清，重叠")])]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844903495108132877",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习 BFC (Block Formatting Context)"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6854573219785998349#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("BFC知识点详解"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844903641485148173#heading-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS中重要的BFC"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);