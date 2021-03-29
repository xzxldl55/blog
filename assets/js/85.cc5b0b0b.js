(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{535:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-修饰符"}},[t._v("#")]),t._v(" Vue 修饰符")]),t._v(" "),a("p",[t._v("在Vue中，修饰符处理了许多DOM事件的细节，让我们不再需要花大量的时间去处理这些烦恼的事情，而能有更多的精力专注于程序的逻辑处理")]),t._v(" "),a("p",[t._v("vue中修饰符分为以下五种：")]),t._v(" "),a("ul",[a("li",[t._v("表单修饰符")]),t._v(" "),a("li",[t._v("事件修饰符")]),t._v(" "),a("li",[t._v("鼠标按键修饰符")]),t._v(" "),a("li",[t._v("键值修饰符")]),t._v(" "),a("li",[t._v("v-bind 修饰符")])]),t._v(" "),a("h2",{attrs:{id:"表单修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单修饰符"}},[t._v("#")]),t._v(" 表单修饰符")]),t._v(" "),a("p",[t._v("在我们填写表单的时候用得最多的是 input 标签，指令用得最多的是 v-model")]),t._v(" "),a("p",[t._v("关于表单的修饰符有如下：")]),t._v(" "),a("ul",[a("li",[t._v("lazy 光标离开标签的时候，才会将值赋予给 value，也就是在 change 事件之后再进行信息同步")]),t._v(" "),a("li",[t._v("trim 动过滤用户输入的首空格字符，而中间的空格不会过滤")]),t._v(" "),a("li",[t._v("number 自动将用户的输入值转为数值类型，但如果这个值无法被parseFloat解析，则会返回原来的值")])]),t._v(" "),a("h2",{attrs:{id:"事件修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件修饰符"}},[t._v("#")]),t._v(" 事件修饰符")]),t._v(" "),a("p",[t._v("事件修饰符是对事件捕获以及目标进行了处理，有如下修饰符：")]),t._v(" "),a("ul",[a("li",[t._v("stop 阻止了事件冒泡，相当于调用了 "),a("code",[t._v("event.stopPropagation")]),t._v(" 方法。 阻止事件冒泡。")]),t._v(" "),a("li",[t._v("prevent 阻止了事件的默认行为，相当于调用了 "),a("code",[t._v("event.preventDefault")]),t._v(" 方法。阻止默认事件。")]),t._v(" "),a("li",[t._v("self 只当在 "),a("code",[t._v("event.target")]),t._v(" 是当前元素自身时触发处理函数。将事件绑定在自身身上，相当于阻止事件冒泡。")]),t._v(" "),a("li",[t._v("once 绑定了事件以后只能触发一次，第二次就不会触发")]),t._v(" "),a("li",[t._v("capture 使事件触发从包含这个元素的顶层开始往下触发。用于事件捕获。")]),t._v(" "),a("li",[t._v("passive 在移动端，当我们在监听元素滚动事件的时候，会一直触发 onscroll 事件会让我们的网页变卡，因此我们使用这个修饰符的时候，相当于给 onscroll 事件整了一个 "),a("code",[t._v(".lazy")]),t._v(" 修饰符")]),t._v(" "),a("li",[t._v("native 让组件变成像 html 内置标签那样监听根元素的原生事件，否则组件上使用 v-on 只会监听自定义事件。绑定原生事件。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 "),a("code",[t._v("v-on:click.prevent.self")]),t._v(" 会阻止所有的点击，而 "),a("code",[t._v("v-on:click.self.prevent")]),t._v(" 只会阻止对元素自身的点击")]),t._v(" "),a("li",[t._v("不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。passive 会告诉浏览器你不想阻止事件的默认行为。")]),t._v(" "),a("li",[t._v("使用 .native 修饰符来操作普通 HTML 标签是会令事件失效的")])])]),t._v(" "),a("h2",{attrs:{id:"鼠标按键修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼠标按键修饰符"}},[t._v("#")]),t._v(" 鼠标按键修饰符")]),t._v(" "),a("p",[t._v("鼠标按键修饰符针对的就是左键、右键、中键点击，有如下：")]),t._v(" "),a("ul",[a("li",[t._v("left 左键点击")]),t._v(" "),a("li",[t._v("right 右键点击")]),t._v(" "),a("li",[t._v("middle 中键点击")])]),t._v(" "),a("h2",{attrs:{id:"键盘修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#键盘修饰符"}},[t._v("#")]),t._v(" 键盘修饰符")]),t._v(" "),a("p",[t._v("键盘修饰符是用来修饰键盘事件（onkeyup，onkeydown）的，有如下：")]),t._v(" "),a("p",[t._v("keyCode存在很多，但 vue 为我们提供了别名，分为以下两种：")]),t._v(" "),a("ul",[a("li",[t._v("普通键（enter、tab、delete、space、esc、up...）")]),t._v(" "),a("li",[t._v("系统修饰键（ctrl、alt、meta、shift...）")]),t._v(" "),a("li",[t._v("还可以通过以下方式自定义一些全局的键盘码别名 "),a("code",[t._v("Vue.config.keyCodes.f2 = 113")])]),t._v(" "),a("li",[t._v(".exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。(2.5.0新增)")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 即使 Alt 或 Shift 被一同按下时也会触发 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click.ctrl")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("A"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 有且只有 Ctrl 被按下的时候才触发 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click.ctrl.exact")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onCtrlClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("A"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 没有任何系统修饰符被按下的时候才触发 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click.exact")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("A"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"v-bind-修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-bind-修饰符"}},[t._v("#")]),t._v(" v-bind 修饰符")]),t._v(" "),a("p",[t._v("v-bind 修饰符主要是为属性进行操作，用来分别有如下：")]),t._v(" "),a("ul",[a("li",[t._v("sync 能对 props 进行一个双向绑定")]),t._v(" "),a("li",[t._v("prop 设置自定义标签属性，避免暴露数据，防止污染 HTML 结构")]),t._v(" "),a("li",[t._v("camel 将命名变为驼峰命名法，如将 view-Box 属性名转换为 viewBox")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("使用 sync 需要注意以下几点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用 sync 的时候，子组件传递的事件名格式必须为 "),a("code",[t._v("update:value")]),t._v("，其中 value 必须与子组件中 props 中声明的名称完全一致")])]),t._v(" "),a("li",[a("p",[t._v("注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用")])]),t._v(" "),a("li",[a("p",[t._v("将 "),a("code",[t._v("v-bind.sync")]),t._v(" 用在一个字面量的对象上，例如 "),a("code",[t._v("v-bind.sync=”{ title: doc.title }”")]),t._v("，是无法正常工作")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue 修饰符"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);