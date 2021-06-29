(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{500:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原型与原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型与原型链"}},[t._v("#")]),t._v(" 原型与原型链")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/javascript/prototype3.png",alt:"原型/实例/构造函数/原型链关系图"}})]),t._v(" "),a("h2",{attrs:{id:"什么是原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是原型"}},[t._v("#")]),t._v(" 什么是原型")]),t._v(" "),a("p",[t._v("每一个 JavaScript 对象( null 除外)在创建时会与之关联另一个对象，这个被关联的对象称之为 "),a("strong",[t._v("原型")]),t._v("(原型对象)。每一个对象都会从原型中‘继承’（委托）原型对象的属性。原型对象就是用来存放实例中共有的那部分属性。"),a("strong",[t._v("每个函数都有一个特殊的属性叫作原型（prototype）")]),t._v("，这个属性指向调用该构造函数而创建的实例的原型。原型对象中有一个属性 constructor, 它指向函数对象。")]),t._v(" "),a("h2",{attrs:{id:"什么是-prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-prototype"}},[t._v("#")]),t._v(" 什么是 prototype")]),t._v(" "),a("p",[t._v("显示原型")]),t._v(" "),a("p",[t._v("prototype 是函数才有的属性，这个属性指向一个对象，该对象正是调用该构造函数而创建的实例的原型。"),a("strong",[t._v("指向原型对象")]),t._v("。"),a("strong",[t._v("箭头函数是没有 prototype 属性的")]),t._v("。在最新 ES 规范里，prototype 被定义为：给其它对象"),a("strong",[t._v("提供共享属性的对象")]),t._v("。prototype 自己也是对象，只是被用以承担某个职能罢了。prototype 描述的是两个对象之间的某种（委托）关系（其中一个，为另一个提供属性访问权限）。每个函数都有一个 prototype 属性，它默认指向一个 Object 空对象(即称为:原型对象)。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("并不是所有的函数都有 prototype 属性，由函数 bind()方法返回的函数就没有 prototype 属性。")]),t._v(" "),a("p",[t._v("函数的 prototype 属性，在定义函数时自动添加 prototype，默认是一个空 Object 对象")])]),t._v(" "),a("h2",{attrs:{id:"什么是-proto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-proto"}},[t._v("#")]),t._v(" 什么是 "),a("code",[t._v("__proto__")])]),t._v(" "),a("p",[t._v("隐式原型")]),t._v(" "),a("p",[t._v("每一个 JavaScript 对象( null 除外)都有一个属性，叫 "),a("strong",[a("code",[t._v("__proto__")])]),t._v(" ,这个属性"),a("strong",[t._v("指向该对象的原型")]),t._v("。"),a("strong",[t._v("指向原型对象")]),t._v(", 原型对象其实就是通过 Object 构造函数生成的。它是历史遗留，在某些环境中，比如 Deno，它是不被支持的。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("进一步阐述")]),t._v(" "),a("p",[a("code",[t._v("__proto__")]),t._v(" ，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 "),a("code",[t._v("Person.prototype")]),t._v(" 中。实际上，它是来自于 "),a("code",[t._v("Object.prototype")]),t._v(" ，与其说是一个属性，不如说是一个 "),a("code",[t._v("getter/setter")]),t._v("，当使用 "),a("code",[t._v("obj.__proto__")]),t._v(" 时，可以理解成返回了 "),a("code",[t._v("Object.getPrototypeOf(obj)")]),t._v("。所以 "),a("code",[t._v("Object.prototype.__proto__")]),t._v(" 的值为 "),a("code",[t._v("null")]),t._v(" 跟 "),a("code",[t._v("Object.prototype")]),t._v(" 没有原型，其实表达了一个意思。")]),t._v(" "),a("p",[t._v("所以 "),a("code",[t._v("__proto__")]),t._v(" 来自 Object.prototype 通过原型链委托返回 Object.getPrototypeOf(obj)")])]),t._v(" "),a("h2",{attrs:{id:"什么是-constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-constructor"}},[t._v("#")]),t._v(" 什么是 constructor")]),t._v(" "),a("p",[t._v("既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？那就是 constructor：")]),t._v(" "),a("p",[t._v("每个原型都有一个 constructor 属性指向关联的构造函数。")]),t._v(" "),a("h2",{attrs:{id:"原型-构造函数-实例之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型-构造函数-实例之间的关系"}},[t._v("#")]),t._v(" 原型/构造函数/实例之间的关系")]),t._v(" "),a("p",[t._v("每一个 JavaScript 对象( null 除外)在创建时会与之关联另一个对象，这个被关联的对象就是"),a("strong",[t._v("原型")]),t._v("。所以原型就是一个对象，用来存放公共属性，供其他对象(实例)从原型(原型对象)中‘继承’（委托）原型对象的属性(原型链继承)。 而 "),a("strong",[t._v("prototype")]),t._v(" (显示原型)是函数的专有属性，函数才有的属性，它指向原型(原型对象)，具体指向的是调用该构造函数而创建的实例的原型。除此之外，每一个 JavaScript 对象( null 除外)都有一个属性，叫 "),a("strong",[a("code",[t._v("__proto__")])]),t._v("(隐式原型)，它也指向原型(原型对象)，具体来说，就是指向实例的原型。既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？有，原型上有个 "),a("strong",[t._v("constructor")]),t._v(" 属性，指向关联的构造函数。下面是它们三者的关系：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/javascript/prototype1.png",alt:"原型/构造函数/实例之间的关系"}})]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("p",[t._v("当读取实例对象的属性时，如果找不到，就会查找与该对象关联的原型对象中的属性，如果还查不到，就去找原型的原型，一直找到为止，如果还找不到就是 null。在此过程中，由互相关联的原型组成的链状结构就是 "),a("strong",[t._v("原型链")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/javascript/prototype2.png",alt:"原型/实例/构造函数/原型链关系图"}})]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * person 上没有 constructor 属性，所以就通过 person.__proto__ 去原型对象中找，\n * 刚好 Person.prototype 这个原型对象中有 constructor\n*/")]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Persion \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("在原型链中查找属性或方法，如果没有查找到相关属性或方法，返回的是 undefined，表示原型链中没有该属性或方法。")]),t._v(" "),a("li",[t._v("而通过访问原型链中的原型对象，到达原型链终点，即 Object.prototype 的值为 null。")]),t._v(" "),a("li",[t._v("通过 instanceof 操作符可以确定原型与实例的关系，判断一个实例是否属于某种类型。instanceof 操作符会递归查找原型链直到找到了或者到达顶层为止。")]),t._v(" "),a("li",[t._v("当通过字面量方式创建对象时，它的原型就是 Object.prototype。")]),t._v(" "),a("li",[t._v("通过 Object.create() 方式创建的对象会以传入的对象参数为对象的原型。")])])]),t._v(" "),a("h2",{attrs:{id:"疑点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#疑点"}},[t._v("#")]),t._v(" 疑点")]),t._v(" "),a("h3",{attrs:{id:"q1-object-和-function-的鸡和蛋的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-object-和-function-的鸡和蛋的问题"}},[t._v("#")]),t._v(" Q1. Object 和 Function 的鸡和蛋的问题")]),t._v(" "),a("p",[t._v("先说说  "),a("code",[t._v("Function.__proto__ === Function.prototype")]),t._v(" 的鸡和蛋的问题：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是底层实现的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" protoObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFunction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" protoObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也就是说")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Function.prototype --\x3e addressA")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Function.__proto__ --\x3e addressA")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Function'")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Function "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("永远把引用类型看成一个地址，Function 在任何引擎执行代码之前已经在内存中了。只不过一个对象标识符 (Function) 的两个属性标识符 ("),a("code",[t._v("prototype")]),t._v(", "),a("code",[t._v("__proto__")]),t._v(") 引用了同一个地址而已。之所以这样设置，作者前面已经说了，为了保持一致性。毕竟 Function 自身就是一个函数。就是先有的 Function，然后实现上把原型指向了 Function.prototype，但是我们不能倒过来推测因为 "),a("code",[t._v("Function.__proto__ === Function.prototype")]),t._v("，所以 Function 调用了自己生成了自己。而 "),a("code",[t._v("Function.__proto__")]),t._v(" 和 "),a("code",[t._v("Function.prototype")]),t._v(" 因为功能和普通函数不同，并且自身又是函数对象，所以才恰好的指向了相同的对象。")]),t._v(" "),a("p",[t._v("先有 "),a("code",[t._v("Object.prototype")]),t._v("（原型链顶端），"),a("code",[t._v("Function.prototype")]),t._v(" 继承 "),a("code",[t._v("Object.prototype")]),t._v(" 而产生，最后，Function 和 Object 和其它构造函数继承 "),a("code",[t._v("Function.prototype")]),t._v(" 而产生。具体见下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/javascript/prototype3.png",alt:"原型/实例/构造函数/原型链关系图"}})]),t._v(" "),a("h3",{attrs:{id:"q2-原型对象的属性或方法可以修改吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-原型对象的属性或方法可以修改吗"}},[t._v("#")]),t._v(" Q2. 原型对象的属性或方法可以修改吗")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("say")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给原型添加say方法")]),t._v("\n     console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化对象")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"为修改前"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nfn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改实例中的隐式原型")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("say")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello 隐式原型"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new name'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"修改实例中的隐式原型"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("通过修改 fn 的隐式原型,让它指向一个新的对象。那么 "),a("code",[t._v("fn.__proto__")]),t._v(" 不等于 "),a("code",[t._v("Demo.prototype")]),t._v("。结论：")]),t._v(" "),a("p",[t._v("ES6 之前不能直接操作隐式原型，也不推荐你这么做。原因：例如对象调用属性时，实例对象不具有该属性时，是通过隐式原型去找的该属性的，找不到的话，在它的隐式原型对象的隐式原型对象上找（原型链）。这也就是我们常说的，在原型上添加属性或者方法，实例可以共享，原因就在于我们并不推荐去修改实例的 "),a("code",[t._v("__proto__")]),t._v(" 属性。")]),t._v(" "),a("p",[t._v("一般而言，可以直接操作显式原型，不能直接操作隐式原型(ES6)")]),t._v(" "),a("p",[a("code",[t._v("__proto__")]),t._v(" 属性已在 ECMAScript 6 语言规范中标准化，用于确保 Web 浏览器的兼容性。它不被推荐使用, 现在更推荐使用 "),a("code",[t._v("Object.getPrototypeOf/Reflect.getPrototypeOf")]),t._v(" 和 "),a("code",[t._v("Object.setPrototypeOf/Reflect.setPrototypeOf")]),t._v("（尽管如此，设置对象的 "),a("code",[t._v("[[Prototype]]")]),t._v("是一个缓慢的操作，如果性能是一个问题，应该避免）。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript深入之从原型到原型链"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);