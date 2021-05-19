(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{497:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("h2",{attrs:{id:"什么是闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是闭包"}},[t._v("#")]),t._v(" 什么是闭包")]),t._v(" "),a("p",[t._v("MDN 定义："),a("strong",[t._v("闭包")]),t._v("是指能够访问自由变量的函数。")]),t._v(" "),a("p",[a("strong",[t._v("自由变量")]),t._v(" 是指在函数中使用，但既不是函数参数也不是函数的局部变量的变量。闭包 = 函数 + 函数能够访问的自由变量。")]),t._v(" "),a("p",[t._v("ECMAScript 中，闭包有以下定义：")]),t._v(" "),a("p",[t._v("理论角度的定义：所有的函数都是闭包。用为它们在创建的时候就将上层上下文的数据保存起来。在函数中访问全局变量就相当于访问自由变量，这时使用最外层的作用域。可以访问其他函数作用域的内部函数叫做闭包。闭包让你可以在一个内层函数中访问到其外层函数的作用域。")]),t._v(" "),a("p",[t._v("从实践角度定义：以下函数才算闭包：")]),t._v(" "),a("ul",[a("li",[t._v("即使创建它的上下文已销毁，它任然存在。（比如内部函数从父函数中返回）。")]),t._v(" "),a("li",[t._v("代码中引用了自由变量。")])]),t._v(" "),a("p",[t._v("一般函数的词法环境在函数返回后就被销毁，但是闭包会保存对创建时所在词法环境的引用，即便创建时所在的执行上下文被销毁，但创建时所在词法环境依然存在，以达到延长变量的生命周期的目的")]),t._v(" "),a("p",[t._v("函数执行后返回结果是一个内部函数，并被外部变量所引用，如果内部函数持有被执行函数作用域的变量，即形成了闭包。")]),t._v(" "),a("p",[t._v("可以在内部函数访问到外部函数作用域。使用闭包，一可以读取函数中的变量，二可以将函数中的变量存储在内存中，保护变量不被污染。而正因闭包会把函数中的变量值存储在内存中，会对内存有消耗，所以不能滥用闭包，否则会影响网页性能，造成内存泄漏。当不需要使用闭包时，要及时释放内存，可将内层函数对象的变量赋值为n ull")]),t._v(" "),a("p",[t._v("接下来就来讲讲实践上的闭包：")]),t._v(" "),a("p",[t._v("首先我们要分析一下这段代码中执行上下文栈和执行上下文的变化情况")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local scope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkscope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("执行过程：")]),t._v(" "),a("ol",[a("li",[t._v("进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈")]),t._v(" "),a("li",[t._v("全局执行上下文初始化")]),t._v(" "),a("li",[t._v("执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈")]),t._v(" "),a("li",[t._v("checkscope 执行上下文初始化，创建变量对象、作用域链、this等")]),t._v(" "),a("li",[t._v("checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出")]),t._v(" "),a("li",[t._v("执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈")]),t._v(" "),a("li",[t._v("f 执行上下文初始化，创建变量对象、作用域链、this等")]),t._v(" "),a("li",[t._v("f 函数执行完毕，f 函数上下文从执行上下文栈中弹出")])]),t._v(" "),a("p",[t._v("当 f 函数执行的时候，checkscope 函数上下文已经被销毁了啊(即从执行上下文栈中被弹出)，怎么还会读取到 checkscope 作用域下的 scope 值呢？")]),t._v(" "),a("p",[t._v("当我们了解了具体的执行过程后，我们知道 f 执行上下文维护了一个作用域链：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("fContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" checkscopeContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" globalContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("就是因为这个作用域链，f 函数依然可以读取到 checkscopeContext.AO 的值，说明当 f 函数引用了 checkscopeContext.AO 中的值的时候，即使 checkscopeContext 被销毁了，但是 JavaScript 依然会让 checkscopeContext.AO 活在内存中，f 函数依然可以通过 f 函数的作用域链找到它，正是因为 JavaScript 做到了这一点，从而实现了闭包这个概念。")]),t._v(" "),a("h2",{attrs:{id:"闭包的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的原理"}},[t._v("#")]),t._v(" 闭包的原理")]),t._v(" "),a("p",[t._v("函数执行分成两个阶段(预编译阶段和执行阶段)。")]),t._v(" "),a("p",[t._v("在预编译阶段，如果发现内部函数使用了外部函数的变量，则会在内存中创建一个“闭包”对象并保存对应变量值，如果已存在“闭包”，则只需要增加对应属性值即可。")]),t._v(" "),a("p",[t._v("执行完后，函数执行上下文会被销毁，函数对“闭包”对象的引用也会被销毁，但其内部函数还持用该“闭包”的引用，所以内部函数可以继续使用“外部函数”中的变量")]),t._v(" "),a("p",[t._v("利用了函数作用域链的特性，一个函数内部定义的函数会将包含外部函数的活动对象添加到它的作用域链中，函数执行完毕，其执行作用域链销毁，但因内部函数的作用域链仍然在引用这个活动对象，所以其活动对象不会被销毁，直到内部函数被烧毁后才被销毁。")]),t._v(" "),a("h2",{attrs:{id:"闭包与作用域的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包与作用域的理解"}},[t._v("#")]),t._v(" 闭包与作用域的理解")]),t._v(" "),a("p",[t._v("JavaScript 是采用词法作用域的，这就意味着 "),a("strong",[t._v("函数的执行依赖于函数定义的时候所产生（而不是函数调用的时候产生的）的变量作用域")]),t._v("。为了去实现这种词法作用域，JavaScript 函数对象的内部状态不仅包含函数逻辑的代码，除此之外还 "),a("strong",[t._v("包含当前作用域链的引用")]),t._v("。函数对象可以通过这个 "),a("strong",[t._v("作用域链")]),t._v(" 相互关联起来，如此，函数体内部的变量都可以保存在函数的作用域内，这在计算机的文献中被称之为 "),a("strong",[t._v("闭包")]),t._v("。")]),t._v(" "),a("p",[t._v("从技术的角度去将，所有的 JavaScript 函数都是闭包：他们都是对象，他们都有一个关联到他们的作用域链。绝大多数函数在调用的时候使用的作用域链和他们在定义的时候的作用域链是相同的，但是这并不影响闭包。")]),t._v(" "),a("p",[t._v("当 "),a("strong",[t._v("调用函数的时候闭包所指向的作用域链")]),t._v(" 和 "),a("strong",[t._v("定义函数时的作用域链")]),t._v(" 不是同一个作用域链的时候，闭包 become interesting。这种 interesting 的事情往往发生在这样的情况下： 当一个函数嵌套了另外的一个函数，外部的函数将内部嵌套的这个函数作为对象返回。一大批强大的编程技术都利用了这类嵌套的函数闭包，当然，javascript 也是这样。可能你第一次碰见闭包觉得比较难以理解，但是去明白闭包然后去非常自如的使用它是非常重要的。")]),t._v(" "),a("p",[t._v("通俗点说，在程序语言范畴内的 "),a("strong",[t._v("闭包是指函数把其它的变量作用域也包含在这个函数的作用域内，形成一个所谓的“闭包”")]),t._v("，这样的话外部的函数就无法去访问内部变量。所以按照第二段所说的，严格意义上所有的函数都是闭包。")]),t._v(" "),a("p",[t._v("需要注意的是：我们常常所说的闭包指的是让外部函数访问到内部的变量，也就是说，按照一般的做法，是使内部函数返回一个函数，然后操作其中的变量。这样做的话一是可以读取函数内部的变量，二是可以让这些变量的值始终保存在内存中。")]),t._v(" "),a("h2",{attrs:{id:"闭包的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的特性"}},[t._v("#")]),t._v(" 闭包的特性")]),t._v(" "),a("ul",[a("li",[t._v("函数嵌套函数。")]),t._v(" "),a("li",[t._v("函数内部可以引用外部的参数和变量。")]),t._v(" "),a("li",[t._v("参数和变量不会被垃圾回收机制回收。")])]),t._v(" "),a("h2",{attrs:{id:"闭包的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的使用场景"}},[t._v("#")]),t._v(" 闭包的使用场景")]),t._v(" "),a("ul",[a("li",[t._v("setTimeout：原生的 setTImeout 传递的第一个函数不能带参数，通过闭包可以实现传参效果。")]),t._v(" "),a("li",[t._v("回调：定义行为，然后关联到用户事件上，代码通常会作为一个回调（事件触发时调用的函数）绑定到事件。")]),t._v(" "),a("li",[t._v("函数防抖")]),t._v(" "),a("li",[t._v("封装私有变量")]),t._v(" "),a("li",[t._v("延长变量的生命周期")]),t._v(" "),a("li",[t._v("典型应用是模块封装，在各模块规范出现之前，都是用这样的方式防止变量污染全局")]),t._v(" "),a("li",[t._v("在循环中创建闭包，防止取到意外的值。")])]),t._v(" "),a("h2",{attrs:{id:"闭包的优点与缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的优点与缺点"}},[t._v("#")]),t._v(" 闭包的优点与缺点")]),t._v(" "),a("p",[a("strong",[t._v("优点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("变量长期存储在内存中，实现变量数据共享。")]),t._v(" "),a("li",[t._v("避免全局变量的污染。")]),t._v(" "),a("li",[t._v("把变量存到独立的作用域，作为私有成员存在。")])]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("常驻内存，增加内存使用量。")]),t._v(" "),a("li",[t._v("使用不当会很容易造成内存泄露。")]),t._v(" "),a("li",[t._v("闭包在处理速度和内存消耗方面对脚本性能具有负面影响。")])]),t._v(" "),a("h2",{attrs:{id:"为什么闭包不会被垃圾回收清除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么闭包不会被垃圾回收清除"}},[t._v("#")]),t._v(" 为什么闭包不会被垃圾回收清除")]),t._v(" "),a("p",[t._v("因为闭包的产生是因为一个函数被当前函数作用域外部的变量引用了，除非外部的变量被释放，否则闭包当然不会被回收。不只是闭包，只要是仍处于被引用状态的堆内存数据，都不会被垃圾回收清除，根本没必要单独拿出闭包来说一下嘛。闭包所保存的，无非是一些存放在堆上的数据而已。有用就不会被清除，没用自然会清除，GC 对闭包做的，跟对其它内存做的事情没什么两样。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/9",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript深入之闭包"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/raxxarr/note/issues/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么闭包不会被垃圾回收清除"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);