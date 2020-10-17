<template>
  <div class="timeline-entry-list">
    <div class="entry-list-container">
      <article class="article">
        <!-- 作者头像 -->
        <div class="author-info-block">
          <a href="#" class="avatar-link">
            <div class="lazy avatar avatar loaded">
              <img src="./image/02.jpg" class="avatar-link-img" />
            </div>
          </a>
          <div class="author-info-box">
            <a href="#" class="username username ellipsis">
              <span>杭州程序员张张</span>
            </a>
            <div class="meta-box">2020年10月11日 阅读 600</div>
          </div>
          <button class="follow-button follow">
            <span>关注</span>
          </button>
        </div>
        <!-- 图片 -->
        <div class="lazy thumb article-hero loaded">
          <img src="./image/01.webp" alt />
        </div>
        <!-- 标题 -->
        <h1 class="article-title">8个JavaScript库可更好地处理本地存储</h1>
        <!-- 内容 -->
        <div class="article-content">
          <!-- markdown-body -->
          <div class="markdown-body">
            <blockquote>
              <p>
                作者：hackernoon
                译者：前端小智
                来源：Kiran
              </p>
            </blockquote>
            <blockquote>
              <p>
                <strong>点赞再看</strong>，微信搜索
                <strong>【大迁世界】</strong> 关注这个没有大厂背景，但有着一股向上积极心态人。本文
                <code>GitHub</code>
                <a
                  href="https://github.com/qq449245884/xiaozhi"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >github.com/qq449245884…</a> 上已经收录，文章的已分类，也整理了很多我的文档，和教程资料。
              </p>
            </blockquote>
            <p>
              <strong>
                大家都说简历没项目写，我就帮大家找了一个项目，还附赠
                <a
                  href="https://github.com/qq449245884/xiaozhi/issues/210"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >【搭建教程】</a>。
              </strong>
            </p>
            <p>
              JavaScript 是一种客户端编程语言。 全球超过
              <strong>90％</strong>的网站都在使用它，它是世界上最常用的编程语言之一。 因此，今天我们业讨论 10 个有关 JavaScript 的常见问题。
            </p>
            <h2 data-id="heading-0">1.如何从数组中移除一个特定的项</h2>
            <p>
              思路：首先，使用
              <code>indexOf</code>查找要删除的数组元素的
              <code>索引(index)</code>，然后使用
              <code>splice</code>方法删除该索引所对应的项。
            </p>
            <p>
              <code>splice()</code>是一个非纯函数，通过删除现有元素和/或添加新元素来更改数组的内容。
            </p>
            <pre><code class="copyable">const array = [2, 5, 9]

const index = array.indexOf(5)
if (index &gt; -1) {
  array.splice(index, 1)
}

console.log(array)
// [ 2, 9 ]
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <code>splice</code>的第二个参数是要删除的元素数量。注意，
              <code>splice</code>会在适当的位置修改数组，并返回一个包含已删除元素的新数组。
            </p>
            <p>
              接着，我们可以来完善一下。下面有两个函数，第一个函数仅删除一个匹配项（即从
              <code>[2,5,9,1,5,8,5]</code>中删除第一个匹配项
              <code>5</code>），而第二个函数则删除所有匹配项：
            </p>
            <pre><code class="copyable">// 仅删除第一个匹配项
function removeItemOnce (arr, value) {
  let index = arr.indexOf(value)
  if (index &gt; -1) {
    arr.splice(index, 1)
  }
  return arr
}

// 删除所有匹配项
function removeItemAll (arr, value) {
  let i = 0
  while(i &lt; arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1)
    } else {
      ++i
    }
  }
}
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>
                删除数组中索引
                <code>i</code>处的元素
              </strong>：
            </p>
            <p>
              删除数组中索引
              <code>i</code>处的元素:
            </p>
            <pre><code class="copyable">array.splice(i, 1)
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              如果你想从数组中删除值为
              <code>number</code>的每个元素，可以这样做：
            </p>
            <pre><code class="copyable">for (let i = array.length - 1; i&gt;=0; i--) {
  if (array[i] === number) {
    array.splice(i, 1)
  }
}
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              如果你只想使索引
              <code>i</code>处的元素不再存在，但又不想更改其他元素的索引：
            </p>
            <pre><code class="copyable">delete array[i]
<span class="copy-code-btn">复制代码</span></code></pre>
            <h2 data-id="heading-1">2. 如何使用 jQuery 或纯 JS 将用户从一个页面重定向到另一个页面</h2>
            <p>
              jQuery 不是必需的
              <code>，window.location.replace(…)</code>最适合模拟 HTTP 重定向。
              <code>window.location.replace(...)</code>优于使用
              <code>window.location.href</code>，因为
              <code>replace()</code>不会将原始页面保留在会话历史记录中，这意味着用户将不会陷入永无休止回退按钮。
            </p>
            <p>
              如果要模拟单击链接，可以使用
              <code>location.href</code>，如果要模拟HTTP重定向，请使用
              <code>location.replace</code>。
            </p>
            <p>
              <strong>事例：</strong>
            </p>
            <pre><code class="copyable">//模拟HTTP重定向
window.location.replace("http://stackoverflow.com")

// 模拟单击链接
window.location.href = "http://stackoverflow.com"
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>你还可以这样做：</p>
            <pre><code class="copyable">$(location).attr('href', 'http://stackoverflow.com')
<span class="copy-code-btn">复制代码</span></code></pre>
            <h2 data-id="heading-2">3.JavaScript 闭包是如何工作的</h2>
            <p>闭包是一个函数和对该函数外部作用域的引用(词法环境)，词法环境是每个执行上下文（堆栈）的一部分，并且是标识符（即局部变量名称）和值之间的映射。</p>
            <p>JavaScript 中的每个函数都维护对其外部词法环境的引用。此引用用于配置调用函数时创建的执行上下文。不管何时调用函数，该引用使函数内的代码能够查看在函数外声明的变量。</p>
            <p>
              在下面的代码中，
              <code>inner</code>与调用
              <code>foo</code>时创建的执行上下文的词法环境一起形成一个闭包，并对外部隐藏了变量
              <code>secret</code>：
            </p>
            <pre><code class="copyable">function foo() {
  const secret = Math.trunc(Math.random()*100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const f = foo() // secret 不能从foo 外部直接访问
f() // 访问 secret 的唯一办法就是调用 f
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>换句话说，在JavaScript中，函数带有对私有状态的引用，只有它们(以及在相同的词法环境中声明的任何其他函数)可以访问该私有状态。这个状态对函数的调用者是不可见的，这为数据隐藏和封装提供了一种优秀的机制。</p>
            <p>请记住，JavaScript中的函数可以像变量一样传递，这意味着这些功能和状态的对可以在程序中传递:类似于在c++中传递类的实例。</p>
            <p>如果JavaScript没有闭包，则必须在函数之间显式传递更多状态，从而使参数列表更长，代码更冗余。</p>
            <p>所以，如果你想让一个函数总是能够访问私有状态，你可以使用一个闭包，我们经常想把状态和函数联系起来。例如，在Java或c++中，当你向类添加私有实例变量和方法时，这是将状态与功能关联起来。</p>
            <p>
              在 C 语言和大多数其他编程语言中，函数返回后，由于堆栈被销毁，所有的局部变量都不再可访问。在JavaScript中，如果在另一个函数中声明一个函数，那么外部函数的本地变量在返回后仍然可以访问。这样，在上面的代码中，
              <code>secret</code>在从
              <code>foo</code>返回后仍然对函数对象内部可用。
            </p>
            <p>闭包在需要与函数关联的私有状态时非常有用。这是一个非常常见的场景，JavaScript直到2015年才有类语法，它仍然没有私有字段语法，闭包满足了这一需求。</p>
            <p>
              <strong>私有实例变量</strong>
            </p>
            <p>
              在下面的事例中，函数
              <code>toString</code> 隐藏了 Car 类的一些细节。
            </p>
            <pre><code class="copyable">function Car(manufacturer, model, year, color) {
  return {
    toString() {
      return `${manufacturer} ${model} (${year}, ${color})`
    }
  }
}
const car = new Car('Aston Martin','V8 Vantage','2012','Quantum Silver')
console.log(car.toString())
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>函数式编程</strong>
            </p>
            <p>
              在下面的代码中，函数
              <code>inner</code>隐藏了
              <code>fn</code>和
              <code>args</code>。
            </p>
            <pre><code class="copyable">function curry(fn) {
  const args = []
  return function inner(arg) {
    if(args.length === fn.length) return fn(...args)
    args.push(arg)
    return inner
  }
}

function add(a, b) {
  return a + b
}

const curriedAdd = curry(add)
console.log(curriedAdd(2)(3)()) // 5
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>面向事件的编程</strong>
            </p>
            <p>
              在以下代码中，函数
              <code>onClick</code>隐藏了变量
              <code>BACKGROUND_COLOR</code>。
            </p>
            <pre><code class="copyable">const $ = document.querySelector.bind(document)
const BACKGROUND_COLOR = 'rgba(200,200,242,1)'

function onClick() {
  $('body').style.background = BACKGROUND_COLOR
}

$('button').addEventListener('click', onClick)
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <pre><code class="copyable">&lt;button&gt;Set background color&lt;/button&gt;
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              <strong>模块化</strong>
            </p>
            <p>
              在下面的示例中，所有实现细节都隐藏在一个立即执行的函数表达式中。函数
              <code>tick</code>和
              <code>toString</code>隐藏了私有状态和函数，它们需要完成自己的工作。闭包使我们能够模块化和封装我们的代码。
            </p>
            <pre><code class="copyable">let namespace = {};

(function foo(n) {
  let numbers = []
  function format(n) {
    return Math.trunc(n)
  }
  function tick() {
    numbers.push(Math.random() * 100)
  }
  function toString() {
    return numbers.map(format)
  }
  n.counter = {
    tick,
    toString
  }
}(namespace))

const counter = namespace.counter
counter.tick()
counter.tick()
console.log(counter.toString())
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>事例 1：</strong>
            </p>
            <p>此示例演示局部变量未在闭包中复制。 闭包保留对原始变量本身的引用。 似乎即使外部函数退出后，堆栈仍在内存中保留。</p>
            <pre><code class="copyable">function foo () {
  let x = 42
  let inner = function () {
    console.log(x)
  }
  x = x + 1
  return inner
}

let f = foo()
f()
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>事例 2：</strong>
            </p>
            <p>
              在下面的代码中，三种方法
              <code>log</code> ，
              <code>increment</code> 和
              <code>update</code> 都在同一词法环境闭包中。
            </p>
            <pre><code class="copyable">function createObject() {
  let x = 42;
  return {
    log() { console.log(x) },
    increment() { x++ },
    update(value) { x = value }
  }
}

const o = createObject()
o.increment()
o.log() // 43
o.update(5)
o.log() // 5
const p = createObject()
p.log() // 42
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>事例 3：</strong>
            </p>
            <p>
              如果使用的变量是使用
              <code>var</code>声明的，需要注意的一点是，使用
              <code>var</code>声明的变量被提升。 由于引入了
              <code>let</code>和
              <code>cons</code>t，这在现代JavaScript 中几乎没有问题。
            </p>
            <p>
              在下面的代码中，每次循环中，都会创建一个新的
              <code>inner</code>函数，变量
              <code>i</code>被覆盖，但是因
              <code>var</code>会让
              <code>i</code> 提升到函数的顶部，所以所有这些
              <code>inner</code>函数覆盖的都是同一个变量，这意味着
              <code>i(3)</code>的最终值被打印了三次。
            </p>
            <pre><code class="copyable">function foo () {
  var result = []
  for (var i = 0; i &lt; 3; i++) {
    result.push(function inner () {
      console.log(i)
    })
  }
  return result
}
const result = foo()

for(var i = 0; i &lt; 3; i++) {
  result[i]()
}
// 3 3 3
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>最后一点：</strong>
            </p>
            <ul>
              <li>
                <p>每当在JavaScript中声明函数时，都会创建一个闭包。</p>
              </li>
              <li>
                <p>从一个函数内部返回另一个函数是闭包的经典例子，因为外部函数内部的状态对于返回的内部函数是隐式可用的，即使外部函数已经完成执行。</p>
              </li>
              <li>
                <p>
                  只要在函数内使用
                  <code>eval()</code>，就会使用一个闭包。
                  <code>eval</code>的文本可以引用函数的局部变量，在非严格模式下，甚至可以通过使用
                  <code>eval('var foo = ')</code>创建新的局部变量。
                </p>
              </li>
            </ul>
            <ul>
              <li>
                当在函数内部使用
                <code>new Function()</code>(
                <strong>Function constructor</strong>)时，它不会覆盖其词法环境，而是覆盖全局上下文。新函数不能引用外部函数的局部变量。
              </li>
            </ul>
            <ul>
              <li>在JavaScript中，闭包类似于在函数声明时保留对作用域的引用(而不是复制)，后者又保留对其外部作用域的引用，以此类推，一直到作用域链顶端的全局对象。</li>
            </ul>
            <ul>
              <li>
                <p>声明函数时创建一个闭包。 当调用函数时，此闭包用于配置执行上下文。</p>
              </li>
              <li>
                <p>每次调用函数时都会创建一组新的局部变量。</p>
              </li>
            </ul>
            <p>
              JavaScript 中的每个函数都维护与其外部词法环境的链接。 词法环境是所有名称的映射（例如，变量，参数）及其范围内的值。因此，只要看到
              <code>function</code>关键字，函数内部的代码就可以访问在函数外部声明的变量。
            </p>
            <pre><code class="copyable">function foo(x) {
  var tmp = 3;

  function bar(y) {
    console.log(x + y + (++tmp)); // 16
  }

  bar(10);
}

foo(2);
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              上面输出结果是
              <code>16</code>，参数
              <code>x</code>和变量
              <code>tmp</code>都存在于外部函数
              <code>foo</code>的词法环境中。函数
              <code>bar</code>及其与函数
              <code>foo</code>的词法环境的链接是一个闭包。
            </p>
            <p>函数不必返回即可创建闭包。 仅仅凭借其声明，每个函数都会在其封闭的词法环境中关闭，从而形成一个闭包。</p>
            <pre><code class="copyable">function foo(x) {
  var tmp = 3;

  return function (y) {
    console.log(x + y + (++tmp)); // 16
  }
}

var bar = foo(2);
bar(10); // 16
bar(10); // 17
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              上面还是打印
              <code>16</code>，因为
              <code>bar</code>内的代码仍然可以引用参数
              <code>x</code>和变量
              <code>tmp</code>，即使它们不再直接的作用域内。
            </p>
            <p>
              但是，由于
              <code>tmp</code>仍然在
              <code>bar</code>的闭包内部徘徊，因此可以对其进行递增。 每次调用bar时，它将增加
              <code>1</code>。
            </p>
            <p>闭包最简单的例子是这样的:</p>
            <pre><code class="copyable">var a = 10;

function test() {
  console.log(a); // will output 10
  console.log(b); // will output 6
}
var b = 6;
test();
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              当调用一个JavaScript函数时，将创建一个新的执行上下文
              <code>ec</code>。连同函数参数和目标对象，这个执行上下文还接收到调用执行上下文的词法环境的链接，这意味着在外部词法环境中声明的变量(在上面的例子中，
              <code>a</code>和
              <code>b</code>)都可以从
              <code>ec</code>获得。
            </p>
            <p>每个函数都会创建一个闭包，因为每个函数都有与其外部词法环境的链接。</p>
            <p>
              <strong>注意</strong>，变量本身在闭包中是可见的，而不是副本。
            </p>
            <h2 data-id="heading-3">4. use strict 在 JavaScript 中做了什么，背后的原因是什么</h2>
            <p>引用一些有趣的部分：</p>
            <blockquote>
              <p>
                严格模式是
                <strong>ECMAScript 5</strong>中的一个新特性，它允许我们将程序或函数放置在严格的操作上下文中。这种严格的上下文会防止某些操作被执行，并引发更多异常。
              </p>
            </blockquote>
            <p>严格模式在很多方面都有帮助：</p>
            <ul>
              <li>它捕获了一些常见的编码漏洞，并抛出异常。</li>
              <li>当采取相对不安全的操作(例如访问全局对象)时，它可以防止错误或抛出错误。</li>
              <li>它禁用令人困惑或考虑不周到的特性。</li>
            </ul>
            <p>
              另外，请注意，我信可以将
              <code>“strict mode”</code>应用于整个文件，也可以仅将其用于特定函数。
            </p>
            <pre><code class="copyable">// Non-strict code...

(function(){
  "use strict";

  // Define your library strictly...
})();

// Non-strict code... 
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>如果是在混合使用旧代码和新代码的情况，这可能会有所帮助。它有点像在Perl中使用的“use strict”。通过检测更多可能导致损坏的东西，帮助我们减少更多的错误。</p>
            <p>现在所有主流浏览器都支持严格模式。</p>
            <p>
              在原生ECMAScript模块(带有
              <code>import</code>和
              <code>export</code>语句)和ES6类中，严格模式始终是启用的，不能禁用。
            </p>
            <h2 data-id="heading-4">5.如何检查字符串是否包含子字符串？</h2>
            <p>
              ECMAScript 6 引入了
              <code>string .prototype.include</code>
            </p>
            <pre><code class="copyable">const string = "foo";
const substring = "oo";

console.log(string.includes(substring));
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              不过，IE 不支持
              <code>includes</code>。在 CMAScript 5或更早的环境中，使用
              <code>String.prototype.indexOf</code>。如果找不到子字符串，则返回
              <code>-1</code>:
            </p>
            <pre><code class="copyable">var string = "foo";
var substring = "oo";

console.log(string.indexOf(substring) !== -1);
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              为了使其在旧的浏览器中运行，可以使用这种
              <code>polyfill</code>：
            </p>
            <pre><code class="copyable">if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length &gt; this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <h2 data-id="heading-5">6. var functionName = function() {} 与 function functionName() {}</h2>
            <p>
              不同之处在于
              <code>functionOne</code>是一个函数表达式，因此只在到达这一行时
              <strong>才会定义</strong>，而
              <code>functionTwo</code>是一个函数声明，在它周围的函数或脚本被执行(由于提升)时就定义。
            </p>
            <p>如，函数表达式</p>
            <pre><code class="copyable">// TypeError: functionOne is not a function
functionOne();

var functionOne = function() {
  console.log("Hello!");
};
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>函数声明:</p>
            <pre><code class="copyable">// "Hello!"
functionTwo();

function functionTwo() {
  console.log("Hello!");
}
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>过去，在不同的浏览器之间，在块中定义的函数声明的处理是不一致的。严格模式(在ES5中引入)解决了这个问题，它将函数声明的范围限定在其封闭的块上。</p>
            <pre><code class="copyable">'use strict';    
{ // note this block!
  function functionThree() {
    console.log("Hello!");
  }
}
functionThree(); // ReferenceError
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <code>function abc(){}</code>也具有作用域-名称
              <code>abc</code>在遇到该定义的作用域中定义。 例：
            </p>
            <pre><code class="copyable">function xyz(){
  function abc(){};
  // abc 在这里定义...
}
// ...不是在这里
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>如果想在所有浏览器上给函数起别名，可以这么做：</p>
            <pre><code class="copyable">function abc(){};
var xyz = abc;
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>在本例中，xyz和abc都是同一个对象的别名</p>
            <pre><code class="copyable">console.log(xyz === abc) // true
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>它的名称是自动分配的。但是当你定义它的时候</p>
            <pre><code class="copyable">var abc = function(){};
console.log(abc.name); //  ""
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              它的
              <code>name</code>称为空，我们创建了一个匿名函数并将其分配给某个变量。使用组合样式的另一个很好的理由是使用简短的内部名称来引用自身，同时为外部用户提供一个长而不会冲突的名称：
            </p>
            <pre><code class="copyable">// 假设 really.long.external.scoped 为 {}
really.long.external.scoped.name = function shortcut(n){
  // 它递归地调用自己:
  shortcut(n - 1);
  // ...
  // 让它自己作为回调传递：:
  someFunction(shortcut);
  // ...
}
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              在上面的例子中，我们可以对外部名称进行同样的操作，但是这样做太笨拙了(而且速度更慢)。另一种引用自身的方法是
              <code>arguments.callee</code>，这种写法也相对较长，并且在严格模式中不受支持。
            </p>
            <p>实际上，JavaScript对待这两个语句是不同的。下面是一个函数声明：</p>
            <pre><code class="copyable">function abc(){}
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              这里的
              <code>abc</code>可以定义在当前作用域的任何地方：
            </p>
            <pre><code class="copyable">// 我们可以在这里调用
abc(); 

// 在这里定义
function abc(){}

// 也可以在这里调用 
abc(); 
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              此外，尽管有
              <code>return</code> 语句，也可以提升：
            </p>
            <pre><code class="copyable">// 我们可以在这里调用
abc(); 
return;
function abc(){}
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>下面是一个函数表达式:</p>
            <pre><code class="copyable">var xyz = function(){};
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              这里的
              <code>xyz</code>是从赋值点开始定义的:
            </p>
            <pre><code class="copyable">// 我们不可以在这里调用
xyz(); 

// 在这里定义 xyz
xyz = function(){}

// 我们可以在这里调用
xyz(); 
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>函数声明与函数表达式之间存在差异的真正原因。</p>
            <pre><code class="copyable">var xyz = function abc(){};
console.log(xyz.name); // "abc"
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>就个人而言，我们更喜欢使用函数表达式声明，因为这样可以控制可见性。当我们像这样定义函数时:</p>
            <pre><code class="copyable">var abc = function(){};
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              我们知道，如果我们没有在作用域链的任何地方定义
              <code>abc</code>，那么我们是在全局作用域内定义的。即使在
              <code>eval()</code>内部使用，这种类型的定义也具有弹性。而定义:
            </p>
            <pre><code class="copyable">function abc(){};
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              取决于上下文，并且可能让你猜测它的实际定义位置，特别是在
              <code>eval()</code>的情况下，—取决于浏览器。
            </p>
            <h2 data-id="heading-6">7.如何从 JavaScript 对象中删除属性？</h2>
            <p>我们可以这样删除对象的属性：</p>
            <pre><code class="copyable">delete myObject.regex;
// 或者
delete myObject['regex'];
//  或者
var prop = "regex";
delete myObject[prop];
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>事例：</p>
            <pre><code class="copyable">var myObject = {
    "ircEvent": "PRIVMSG",
    "method": "newURI",
    "regex": "^http://.*"
};
delete myObject.regex;

console.log(myObject);
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              JavaScript 中的对象可以看作键和值之间的映射。
              <code>delete</code>操作符用于一次删除一个键(通常称为对象属性)。
            </p>
            <pre><code class="copyable">var obj = {
  myProperty: 1    
}
console.log(obj.hasOwnProperty('myProperty')) // true
delete obj.myProperty
console.log(obj.hasOwnProperty('myProperty')) // false
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <code>delete</code> 操作符不是直接释放内存，它不同于简单地将
              <code>null</code>或
              <code>undefined</code>值赋给属性，而是将属性本身从对象中删除。
            </p>
            <p>
              <strong>注意</strong>，如果已删除属性的值是引用类型(对象)，而程序的另一部分仍然持有对该对象的引用，那么该对象当然不会被垃圾收集，直到对它的所有引用都消失。
            </p>
            <p>
              <code>delete</code>只对其描述符标记为
              <code>configurable</code>的属性有效。
            </p>
            <h2 data-id="heading-7">8. JS 的比较中应使用哪个等于运算符（== vs ===）？</h2>
            <p>
              严格相等运算符(
              <code>===</code>)的行为与抽象相等运算符(
              <code>==</code>)相同，除非不进行类型转换，而且类型必须相同才能被认为是相等的。
            </p>
            <p>
              <code>==</code>运算符会进行类型转换后比较相等性。
              <code>===</code>运算符不会进行转换，因此如果两个值的类型不同，则
              <code>===</code>只会返回false。
            </p>
            <p>
              JavaScript有两组相等运算符:
              <code>===</code>和
              <code>!==</code>，以及它们的孪生兄弟
              <code>==</code>和
              <code>!=</code>。如果这两个操作数具有相同的类型和相同的值，那么
              <code>===</code>的结果就是
              <code>true</code>，而
              <code>!==</code>的结果就是
              <code>false</code>。
            </p>
            <p>下面是一些事例：</p>
            <pre><code class="copyable">'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              上面有些看起来会挺困惑的，所以尽量还是使用严格比较运算符(
              <code>===</code>)。对于引用类型，
              <code>==</code>和
              <code>===</code>操作一致(特殊情况除外)。
            </p>
            <pre><code class="copyable">var a = [1,2,3];
var b = [1,2,3];

var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

var e = "text";
var f = "te" + "xt";

a == b            // false
a === b           // false

c == d            // false
c === d           // false

e == f            // true
e === f           // true
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              特殊情况是，当你将一个字符串字面量与一个字符串对象进行比较时，由于该对象的
              <code>toString</code>或
              <code>valueOf</code>方法，该对象的值与相字面量的值一样。
            </p>
            <p>
              考虑将字符串字面量与由
              <code>String</code>构造函数创建的字符串对象进行比较：
            </p>
            <pre><code class="copyable">"abc" == new String("abc")    // true
"abc" === new String("abc")   // false
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              在这里，
              <code>==</code>操作符检查两个对象的值并返回
              <code>true</code>，但是
              <code>=</code>==看到它们不是同一类型并返回
              <code>false</code>。哪一个是正确的?这取决于你想要比较的是什么。
            </p>
            <p>
              我们的建议是完全绕开该问题，只是不要使用
              <code>String</code>构造函数来创建字符串对象。
            </p>
            <p>
              <strong>使用==运算符（等于）</strong>
            </p>
            <pre><code class="copyable">true == 1; //true, 因为 true 被转换为1，然后进行比较
"2" == 2;  //true, 因为 “2” 被转换成 2，然后进行比较
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>使用===操作符</strong>
            </p>
            <pre><code class="copyable">true === 1; //false
"2" === 2;  //false
<span class="copy-code-btn">复制代码</span></code></pre>
            <h2 data-id="heading-8">9.在 JavaScript 中深拷贝一个对象的最有效方法是什么？</h2>
            <p>
              <strong>
                快速克隆，数据丢失–
                <code>JSON.parse/stringify</code>
              </strong>
            </p>
            <p>
              如果您没有在对象中使用
              <code>Date</code>、函数、
              <code>undefined</code>、
              <code>Infinity</code>、
              <code>RegExp</code>、
              <code>Map</code>、
              <code>Set</code>、blob、、稀疏数组、类型化数组或其他复杂类型，那么可以使用一行简单代码来深拷贝一个对象：
            </p>
            <pre><code class="copyable">JSON.parse(JSON.stringify(object))
<span class="copy-code-btn">复制代码</span></code></pre>
            <pre><code class="copyable">const a = {
  string: 'string',
  number: 123,
  bool: false,
  nul: null,
  date: new Date(), 
  undef: undefined,  // 丢失
  inf: Infinity,  // 被设置为 null
  re: /.*/,  // 丢失
}
console.log(a);
console.log(typeof a.date);  // object
const clone = JSON.parse(JSON.stringify(a));
console.log(clone);
/*
object
{
  string: 'string',
  number: 123,
  bool: false,
  nul: null,
  date: '2020-09-04T00:45:41.823Z',
  inf: null,
  re: {}
}

*/
console.log(typeof clone.date);  // string
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>使用库进行可靠的克隆</strong>
            </p>
            <p>由于克隆对象不是一件简单的事情(复杂类型、循环引用、函数等等)，大多数主要的库都提供了拷贝对象的函数。如果你已经在使用一个库，请检查它是否具有对象克隆功能。例如</p>
            <ul>
              <li>
                <p>
                  <strong>lodash</strong> –
                  <code>cloneDeep</code>; 可以通过
                  <code>lodash.clonedeep</code>模块单独导入，如果你尚未使用提供深拷贝功能的库，那么它可能是你的最佳选择
                </p>
              </li>
              <li>
                <p>
                  AngularJS –
                  <code>angular.copy</code>
                </p>
              </li>
              <li>
                <p>
                  jQuery –
                  <code>jQuery.extend(true, { }, oldObject)</code>;
                  <code>.clone()</code>仅克隆DOM元素
                </p>
              </li>
            </ul>
            <p>
              <strong>ES6</strong>
            </p>
            <p>
              ES6 提供了两种浅拷贝机制:
              <code>Object.assign()</code>和
              <code>spread</code>语法。它将所有可枚举的自有属性的值从一个对象复制到另一个对象。例如
            </p>
            <pre><code class="copyable">var A1 = {a: "2"};
var A2 = Object.assign({}, A1);
var A3 = {...A1};  // Spread Syntax
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>在以前的测试中，速度是最主要的问题</p>
            <pre><code class="copyable">JSON.parse(JSON.stringify(obj))
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              这是深拷贝对象的最慢方法，它比
              <code>jQuery.extend</code>慢 10-20%。
            </p>
            <p>
              当
              <code>deep</code>标志设置为
              <code>false</code>（浅克隆）时，
              <code>jQuery.extend</code>非常快。 这是一个不错的选择，因为它包括一些用于类型验证的额外逻辑，并且不会复制未定义的属性等，但这也会使你的速度变慢。
            </p>
            <p>
              如果想拷贝的一个对象且你知道对象结构。那么，你可以写一个简单的
              <code>for (var i in obj)</code>循环来克隆你的对象，同时检查
              <code>hasOwnProperty</code>，这将比jQuery快得多。
            </p>
            <pre><code class="copyable">var clonedObject = {
  knownProp: obj.knownProp,
  ..
}
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              注意在
              <code>Date</code> 对象JSON上使用
              <code>JSON.parse(JSON.stringify(obj))</code>方法。
              <code>JSON.stringify(new Date())</code>以ISO格式返回日期的字符串表示，
              <code>JSON.parse()</code>不会将其转换回
              <code>Date</code>对象。
            </p>
            <h2 data-id="heading-9">10.如何在另一个JavaScript文件中包含一个JavaScript文件？</h2>
            <p>
              旧版本的JavaScript没有
              <code>import</code>、
              <code>include</code>或
              <code>require</code>，因此针对这个问题开发了许多不同的方法。
            </p>
            <p>
              但是从2015年(ES6)开始，JavaScript已经有了ES6模块标准，可以在Node中导入模块。为了与旧版浏览器兼容，可以使用
              <strong>Webpack</strong>和
              <strong>Rollup</strong>之类的构建工具和/或Babel这样的编译工具。
            </p>
            <p>
              <strong>ES6 Module</strong>
            </p>
            <p>
              从v8.5开始，Node.js就支持ECMAScript (ES6)模块，带有
              <code>--experimental-modules</code>标志，而且至少Node.js v13.8.0没有这个标志。要启用ESM(相对于Node.js之前的commonjs风格的模块系统[CJS])，你可以在
              <code>package.json</code>中使用
              <code>“type”:“module”</code>。或者为文件提供扩展名
              <code>.mjs</code>。(类似地，如果默认为ESM，则用 Node.js 以前的CJS模块编写的模块可以命名为
              <code>.cjs</code>。)
            </p>
            <p>
              使用
              <code>package.json</code>：
            </p>
            <pre><code class="copyable">{
    "type": "module"
}
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              在
              <code>module.js：</code> 中
            </p>
            <pre><code class="copyable">export function hello() {
  return "Hello";
}
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              <strong>main.js:</strong>
            </p>
            <pre><code class="copyable">import { hello } from './module.js';
let val = hello();  // val is "Hello";
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              使用
              <code>.mjs</code>，会有对应的
              <code>module.mjs</code>：
            </p>
            <pre><code class="copyable">export function hello() {
  return "Hello";
}
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              在
              <code>main.mjs</code> 中
            </p>
            <pre><code class="copyable">import { hello } from './module.mjs';
let val = hello();  // val is "Hello";
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              自Safari 10.1，Chrome 61，Firefox 60 和 Edge 16 开始，浏览器就已经支持直接加载ECMAScript模块（不需要像Webpack这样的工具）。无需使用Node.js的
              <code>.mjs</code>扩展名； 浏览器完全忽略模块/脚本上的文件扩展名。
            </p>
            <pre><code class="copyable">&lt;script type="module"&gt;
  import { hello } from './hello.mjs'; // Or it could be simply `hello.js`
  hello('world');
&lt;/script&gt;
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <pre><code class="copyable">// hello.mjs -- or it could be simply `hello.js`
export function hello(text) {
  const div = document.createElement('div');
  div.textContent = `Hello ${text}`;
  document.body.appendChild(div);
}
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>
                大家都说简历没项目写，我就帮大家找了一个项目，还附赠
                <a
                  href="https://github.com/qq449245884/xiaozhi/issues/210"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >【搭建教程】</a>。
              </strong>
            </p>
            <p>
              <strong>浏览器中的动态导入</strong>
            </p>
            <p>动态导入允许脚本根据需要加载其他脚本</p>
            <pre><code class="copyable">&lt;script type="module"&gt;
  import('hello.mjs').then(module =&gt; {
      module.hello('world');
    });
&lt;/script&gt;
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>Node.js require</strong>
            </p>
            <p>
              在 Node.js 中用的较多还是
              <code>module.exports/require</code>
            </p>
            <pre><code class="copyable">// mymodule.js
module.exports = {
   hello: function() {
      return "Hello";
   }
}
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <code>// server.js const myModule = require('./mymodule'); let val = myModule.hello(); // val is "Hello"</code>
            </p>
            <p>
              <strong>动态加载文件</strong>
            </p>
            <p>
              我们可以通过动态创建
              <code>script</code> 来动态引入文件：
            </p>
            <pre><code class="copyable">function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); 

    document.head.appendChild(script); 
}
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              <strong>检测脚本何时执行</strong>
            </p>
            <p>现在，有一个个大问题。上面这种动态加载都是异步执行的，这样可以提高网页的性能。 这意味着不能在动态加载下马上使用该资源，因为它可能还在加载。</p>
            <p>
              例如：
              <code>my_lovely_script.js</code>包含
              <code>MySuperObject</code>：
            </p>
            <pre><code class="copyable">var js = document.createElement("script");

js.type = "text/javascript";
js.src = jsFilePath;

document.body.appendChild(js);

var s = new MySuperObject();

Error : MySuperObject is undefined
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>然后，按F5重新加载页面，可能就有效了。那么该怎么办呢？</p>
            <p>我们可以使用回调函数来解决些问题。</p>
            <pre><code class="copyable">function loadScript(url, callback)
{
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = callback;

    head.appendChild(script);
}
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
            <p>
              然后编写在
              <code>lambda</code>函数中加载脚本后要使用的代码
            </p>
            <pre><code class="copyable">var myPrettyCode = function() {
   // Here, do whatever you want
};
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>然后，运行代码：</p>
            <pre><code class="copyable">loadScript("my_lovely_script.js", myPrettyCode);
<span class="copy-code-btn">复制代码</span></code></pre>
            <p>
              请注意，脚本可能在加载DOM之后或之前执行，具体取决于浏览器以及是否包括行
              <code>script.async = false;</code>。
            </p>
            <hr />
            <p>
              原文：
              <a
                href="https://hackernoon.com/10-essential-javascript-questions-zf1t3ueo"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >hackernoon.com/10-essentia…</a>
            </p>
            <p>
              <strong>
                代码部署后可能存在的BUG没法实时知道，事后为了解决这些BUG，花了大量的时间进行log 调试，这边顺便给大家推荐一个好用的BUG监控工具
                <a
                  href="https://www.fundebug.com/?utm_source=xiaozhi"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >Fundebug</a>。
              </strong>
            </p>
            <h2 data-id="heading-10">交流</h2>
            <p>
              文章每周持续更新，可以微信搜索
              <strong>【大迁世界 】</strong> 第一时间阅读，回复
              <strong>【福利】</strong> 有多份前端视频等着你，本文 GitHub
              <a
                href="https://github.com/qq449245884/xiaozhi"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >github.com/qq449245884…</a> 已经收录，欢迎Star。
            </p>
          </div>
        </div>
        <!-- 文章底部 -->
        <div class="tag-list-box">
          <div class="tag-list-title">关注下面的标签，发现更多相似文章</div>
          <div class="tag-list">
            <a class="item">
              <div class="lazy thumb tag-icon loaded">
                <img src="./image/04.jpg" alt />
              </div>
              <div data-v-d6ec2d02 class="tag-title">JavaScript</div>
            </a>
            <a class="item">
              <div class="lazy thumb tag-icon loaded">
                <img src="./image/05.jpg" alt />
              </div>
              <div data-v-d6ec2d02 class="tag-title">前端</div>
            </a>
          </div>
        </div>
        <!-- 作者信息 -->
        <a href="#">
          <div class="author-info-block">
            <a href="#" class="avatar-link">
              <div class="lazy avatar avatar loaded">
                <img src="./image/02.jpg" class="avatar-link-img" />
              </div>
            </a>
            <div class="author-info-box">
              <a href="#" class="username username ellipsis">
                <span>杭州程序员张张</span>
              </a>
              <div class="meta-box">
                <a class="posts">
                  <span class="count post-count">发布了 141 篇专栏 ·</span>
                </a>
                <span class="count">获得点赞 6,736 ·</span>
                <span class="count">获得阅读 365,518</span>
              </div>
            </div>
            <button class="follow-button follow">
              <span>关注</span>
            </button>
          </div>
        </a>
        <!-- 掘金广告 -->
        <div class="article-banner">
          <a
            class="banner-title"
            href="https://juejin.im/extension/?utm_source=juejin.im&amp;utm_medium=post&amp;utm_campaign=extension_promotion"
          >安装掘金浏览器插件</a>
          <div class="banner-content">
            打开新标签页发现好内容，掘金、GitHub、Dribbble、ProductHunt
            等站点内容轻松获取。快来安装掘金浏览器插件获取高质量内容吧！
          </div>
        </div>
        <!-- 评论区 -->
        <div class="comment-list-box" id="comment-box">
          <div class="comment-form comment-form">
            <div class="avatar-box">
              <div class="lazy avatar avatar loaded">
                <img src="./image/06.jpg" alt />
              </div>
            </div>
            <div class="form-box">
              <div class="auth-card">
                <div class="input-box">
                  <input
                    contenteditable="true"
                    spellcheck="false"
                    placeholder="输入评论..."
                    class="rich-input empty"
                  />
                  <br />
                </div>
              </div>
              <div class="action-box">
                <div class="emoji emoji-btn">
                  <div class="emoji-box">
                    <img src="./image/07.svg" alt />
                    <span>表情</span>
                  </div>
                </div>
                <div class="image-btn">
                  <div class="emoji emoji-btn">
                    <div class="emoji-box">
                      <img src="./image/07.svg" alt />
                      <span>表情</span>
                    </div>
                  </div>
                </div>
                <div class="submit">
                  <span>Ctrl or ⌘ + Enter</span>
                  <button class="submit-btn">评论</button>
                </div>
              </div>
            </div>
            <!-- <input type="file" class="hidden" /> -->
          </div>
        </div>
      </article>
    </div>
    <!-- 右侧边栏 -->
    <div class="sidebar sidebar">
      <!-- 关于作者 -->
      <div class="sidebar-block author-block shadow">
        <div class="block-title">关于作者</div>
        <div class="block-body">
          <!-- 头像 -->
          <a href="#" class="user-item item">
            <div class="lazy avatar avatar loaded">
              <img src="./image/02.jpg" />
            </div>
            <div class="info-box">
              <a href="#" class="username">
                <span class="name" style="max-width: 128px;">杭州程序员张张</span>
                <a href="#" class="rank">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIzIDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGQTAwMCIgZD0iTTMgMWgxN2EyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zIDRoMnY3SDN6TTggNmgybDIgNWgtMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQgNmgtMmwtMiA1aDJ6TTMgOWg1djJIM3pNMTggOGgydjNoLTJ6TTE1IDNoNXYyaC01ek0xNSA5aDN2MmgtM3pNMTYgNmgzdjJoLTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDZoMnYyaC0yek0xNSA1aDJ2M2gtMnoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt="lv-5"
                  />
                </a>
              </a>
              <div title="公众号 @ 前端全栈开发者" class="position">公众号 @ 前端全栈开发者</div>
            </div>
          </a>
          <!-- 点赞 -->
          <div data-v-52d07ee0 data-v-71f2d09e class="stat-item item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              class="zan"
            >
              <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
                <ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57" />
                <path
                  fill="#7BB9FF"
                  d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
                />
              </g>
            </svg>
            <span class="content">
              获得点赞
              <span class="count">6,760</span>
            </span>
          </div>
          <!-- 阅读 -->
          <div class="stat-item item">
            <svg width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon">
              <g fill="none" fill-rule="evenodd">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF" />
                <path
                  fill="#7BB9FF"
                  d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
                />
              </g>
            </svg>
            <span class="content">
              文章被阅读
              <span class="count">367,050</span>
            </span>
          </div>
        </div>
      </div>
      <!-- 相关文章 -->
      <div class="sidebar-block related-entry-sidebar-block shadow">
        <div class="block-title">相关文章</div>
        <div class="block-body">
          <div class="entry-list">
            <a href="#" class="item">
              <div class="entry-title">Vue.js中 watch 的高级用法</div>
              <div class="entry-meta-box">
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">821</span>
                </div>
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik0yIDR2OC4wMzhoNC40NDRMMTEuMTExIDE1di0yLjk2MkgxNFY0eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">35</span>
                </div>
              </div>
            </a>
            <a href="#" class="item">
              <div class="entry-title">Vue.js中 watch 的高级用法</div>
              <div class="entry-meta-box">
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">821</span>
                </div>
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik0yIDR2OC4wMzhoNC40NDRMMTEuMTExIDE1di0yLjk2MkgxNFY0eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">35</span>
                </div>
              </div>
            </a>
            <a href="#" class="item">
              <div class="entry-title">Vue.js中 watch 的高级用法</div>
              <div class="entry-meta-box">
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">821</span>
                </div>
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik0yIDR2OC4wMzhoNC40NDRMMTEuMTExIDE1di0yLjk2MkgxNFY0eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">35</span>
                </div>
              </div>
            </a>
            <a href="#" class="item">
              <div class="entry-title">Vue.js中 watch 的高级用法</div>
              <div class="entry-meta-box">
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">821</span>
                </div>
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik0yIDR2OC4wMzhoNC40NDRMMTEuMTExIDE1di0yLjk2MkgxNFY0eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">35</span>
                </div>
              </div>
            </a>
            <a href="#" class="item">
              <div class="entry-title">Vue.js中 watch 的高级用法</div>
              <div class="entry-meta-box">
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">821</span>
                </div>
                <div class="entry-meta">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik0yIDR2OC4wMzhoNC40NDRMMTEuMTExIDE1di0yLjk2MkgxNFY0eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    class="icon"
                  />
                  <span class="count">35</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 目录 -->
      <div class="sticky-block-box">
        <div class="catalog-block pure">
          <nav class="article-catalog">
            <div class="catalog-title">目录</div>
            <div class="catalog-body">
              <ul class="catalog-list" style="margin-top: 0px;">
                <li class="item d1 active">
                  <a href="#" title="Local Storage Bridge">Local Storage Bridge</a>
                </li>
                <li class="item d1">
                  <a href="#" title="Basil.js">Basil.js</a>
                </li>
                <li class="item d1">
                  <a href="#" title="store.js">store.js</a>
                </li>
                <li class="item d1">
                  <a href="#" title="lscache">lscache</a>
                </li>
                <li class="item d1">
                  <a href="#" title="Lockr">Lockr</a>
                </li>
                <li class="item d1">
                  <a href="#" title="Barn">Barn</a>
                </li>
                <li class="item d1">
                  <a href="#" title="localForage">localForage</a>
                </li>
                <li class="item d1">
                  <a href="#" title="crypt.io">::before crypt.io</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="zxcvbnm"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      articleId: "",
      article: "",
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      console.log(this.articleId);
      this.articleId = this.$route.params;
      const result = await this.$API.details.getPost(this.articleId);
      this.article = result;
    },
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  cursor: pointer;
  color: #000;
}
.timeline-entry-list {
  width: 960px;
  // 居中
  position: absolute;
  left: 0;
  right: 0;
  margin: 1.767rem auto;
  // background-color: rgb(228, 248, 232);

  // 中间内容
  .entry-list-container {
    width: 652px;
    background-color: #fff;
    // margin-right: auto;
    margin-bottom: 1.5rem;
    padding: 0 2rem;

    article {
      width: 652px;
      height: 100%;
      padding: 2rem 0 0;
      margin-bottom: 36px;

      // 头部作者
      .author-info-block {
        width: 652px;
        // height: 100px;
        // background-color: rgb(133, 189, 107);
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        .author-info-block .avatar-link {
          font-size: 0;
        }
        .avatar-link-img {
          flex: 0 0 auto;
          margin-right: 1rem;
          width: 3.333rem;
          height: 3.333rem;
          border-radius: 50%;
        }
        .author-info-box {
          min-width: 0;
          flex-grow: 1;
          flex: 1;
          .username {
            display: inline-block;
            width: 100%;
            font-size: 1.3rem;
            font-weight: 700;
            color: #333;
            .name {
              display: inline-block;
              vertical-align: top;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .meta-box {
            font-size: 1.1rem;
            color: #909090;
          }
        }
        .follow-button {
          margin: 0 0 0 auto;
          padding: 0;
          width: 55px;
          height: 26px;
          font-size: 13px;
          border: 1px solid #6cbd45;
          color: #6cbd45;
          background-color: #fff;
          border-radius: 2px;
          cursor: pointer;
        }
      }
      // 图片
      .article-hero > img {
        width: 652px;
      }
      // 标题
      .article-title {
        margin: 0.67em 0;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.5;
      }
      // 文章
      .article-content {
        word-break: break-word;
        line-height: 1.75;
        font-weight: 400;
        font-size: 15px;
        overflow-x: hidden;
        blockquote {
          color: #000;
          padding: 1px 23px;
          margin: 22px 0;
          border-left: 4px solid #cbcbcb;
          background-color: #f8f8f8;
        }
        p {
          line-height: inherit;
          margin-top: 22px;
          margin-bottom: 22px;
        }
        h2 {
          padding-bottom: 12px;
          font-size: 24px;
          border-bottom: 1px solid #ececec;
        }
        pre {
          position: relative;
          line-height: 1.75;
          background: #f8f8f8;
          padding: 18px 15px 12px;
          color: #998;
          .article-content .hljs-comment,
          .article-content .hljs-quote {
            color: #998;
          }
          .copy-code-btn {
            position: absolute;
            top: 6px;
            right: 15px;
            font-size: 12px;
            line-height: 1;
            cursor: pointer;
            color: hsla(0, 0%, 54.9%, 0.8);
            transition: color 0.1s;
          }
        }
        pre > code {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          background: #f8f8f8;
          color: #998;
          font-size: 14px;
        }
        hr {
          border: none;
          border-top: 1px solid #ddd;
          margin-top: 2.7rem;
          margin-bottom: 2.7rem;
        }
      }
      // 文章底部
      .tag-list-box {
        margin-bottom: 2rem;
        .tag-list-title {
          margin-bottom: 2rem;
          padding: 0 0 0 2rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: #000;
          border-left: 6px solid #ddd;
        }
        .tag-list {
          display: flex;
          flex-wrap: wrap;
          a {
            text-decoration: none;
            cursor: pointer;
            // color: #909090;
          }
          .tag-icon > img {
            width: 1.75rem;
            height: 1.75rem;
            border-radius: 2px;
          }
          .item {
            display: flex;
            align-items: center;
            margin: 0 1.25rem 1rem 0;
            padding: 0.167rem;
            background-color: #fff;
            border: 1px solid #e3e3e3;
            border-radius: 2px;
            .tag-title {
              padding: 0 0.75rem;
              font-size: 1rem;
              line-height: 1.75rem;
              color: #919191;
            }
          }
        }
      }
      // 作者信息
      .author-info-block .position {
        max-width: 400px;
      }
      // 掘金广告
      .article-banner {
        margin-bottom: 2.5rem;
        padding: 0 0 0 2rem;
        border-left: 6px solid #ddd;
        .banner-title {
          font-size: 1.3rem;
          line-height: 1.6;
          color: #007fff;
        }
        .banner-content {
          margin-top: 0.2rem;
          font-size: 1.1rem;
          line-height: 1.4;
          color: #909090;
        }
      }
      // 评论区
      .comment-list-box {
        position: relative;
        border-top: 1px solid #ebebeb;
        padding-top: 1.333rem;
        .comment-form {
          margin: 0 1.666rem 1.333rem;
          display: flex;
          position: relative;
          padding: 1rem 1.333rem;
          background-color: #fafbfc;
          border-radius: 3px;
          .avatar-box {
            flex: 0 0 auto;
            .avatar > img {
              display: block;
              margin: 0 1rem 0 0;
              width: 2.667rem;
              height: 2.667rem;
              border-radius: 50%;
            }
          }
          .form-box {
            flex: 1 1 auto;
            position: relative;
            .auth-card {
              position: relative;
              .input-box {
                font-size: 0;
                background-color: #fff;
                border: 1px solid #f1f1f1;
                border-radius: 3px;
                .rich-input {
                  position: relative;
                  padding: 0.6rem 1rem;
                  font-size: 1.083rem;
                  line-height: 1.7;
                  color: #17181a;
                  outline: none;
                  min-height: 1.3em;
                }
              }
            }
            .action-box {
              display: flex;
              align-items: center;
              margin: 0.65rem 0 0;
              .emoji {
                position: relative;
                margin: 0.65rem 0 0;
                .emoji-box {
                  margin-right: 12px;
                  display: flex;
                  align-items: center;
                  position: relative;
                  color: #027fff;
                  cursor: pointer;
                  font-size: 1.2rem;
                }
              }
              .submit {
                flex: 0 0 auto;
                margin-left: auto;
                span {
                  color: #c2c2c2;
                  margin-right: 8px;
                  font-size: 13px;
                }
                .submit-btn {
                  flex: 0 0 auto;
                  margin-left: auto;
                  padding: 0.5rem 1.3rem;
                  font-size: 1.25rem;
                  color: #fff;
                  background-color: #027fff;
                  border-radius: 2px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }

  // 右侧边栏
  .sidebar {
    width: 20rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    // background-color: lime;

    // 关于作者  右侧相关文章
    .sidebar-block {
      background-color: #fff;
      position: relative;
      margin-bottom: 1.5rem;
      border-radius: 2px;
      width: 20rem;
      // height: 200px;
      .block-title {
        padding: 1rem 1.3rem;
        font-size: 1.16rem;
        color: #333;
        border-bottom: 1px solid hsla(0, 0%, 58.8%, 0.1);
      }
      .block-body {
        padding-bottom: 10px;
        // 头像
        .user-item {
          padding: 1.3rem;
          .avatar > img {
            flex: 0 0 auto;
            margin-right: 1rem;
            width: 4.167rem;
            height: 4.167rem;
            border-radius: 50%;
          }
          .info-box {
            flex: 1 1 auto;
            min-width: 0;
            .username {
              font-size: 1.333rem;
              font-weight: 600;
              color: #000;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: pre-wrap;
            }
            .position {
              margin-top: 0.8rem;
              font-size: 1.25rem;
              color: #72777b;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        // 点赞-阅读
        .stat-item {
          margin-bottom: 0.8rem;
          padding: 0 1.3rem;
          .zan {
            margin-right: 1rem;
          }
          .content {
            font-size: 1.25rem;
            color: #000;
          }
        }
        // 右侧相关文章
        .entry-list {
          .item {
            display: block;
            padding: 0.8rem 1.3rem;
            .entry-title {
              font-size: 1.16rem;
              color: #333;
            }
            .entry-meta-box {
              margin-top: 0.4rem;
              .entry-meta {
                display: inline-block;
                margin-right: 1.5rem;
                font-size: 1.1rem;
                color: #c2c2c2;
              }
            }
          }
        }
        .item {
          display: flex;
          align-items: center;
        }
      }
    }
    .shadow {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    nav {
      display: block;
    }
    //目录
    .sticky-block-box {
      position: sticky;
      top: 15px;
      .catalog-block {
        position: relative;
        margin-bottom: 1.5rem;
        border-radius: 2px;
        .article-catalog {
          .catalog-title {
            font-size: 1.167rem;
            color: #000;
          }
          .catalog-body {
            margin: 6px 0;
            overflow: hidden;
            .catalog-body > ul {
              padding: 0;
              margin: 0;
              display: block;
              list-style-type: disc;
              margin-block-start: 1em;
              margin-block-end: 1em;
              margin-inline-start: 0px;
              margin-inline-end: 0px;
              padding-inline-start: 40px;
            }
            .catalog-list .item.d1 {
              font-weight: 600;
              color: #000;
            }
            .catalog-list .item {
              margin: 0;
              padding: 0;
              font-size: 1.167rem;
              font-weight: 400;
              line-height: 1.3;
              color: #333;
              list-style: none;
            }
            .catalog-list .item.d1 > a {
              margin: 6px 0;
              padding: 4px 0 4px 21px;
            }
            .catalog-list .item a {
              display: block;
              position: relative;
              padding: 4px 0 4px 12px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .catalog-list .item.d1 > a:before {
              left: 5px;
              margin-top: -3px;
              width: 6px;
              height: 6px;
            }
            .catalog-list .item a:before {
              content: "";
              position: absolute;
              top: 50%;
              left: 0;
              margin-top: -2px;
              width: 4px;
              height: 4px;
              background-color: currentColor;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
  .zxcvbnm {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIuODc0IDYuMDQ0VjE1aC0xLjczQy41MTMgMTUgMCAxNC4zODIgMCAxMy42MjRWNy41MjljMC0uNzkuNTM1LTEuNDg1IDEuMTQzLTEuNDg1aDEuNzMxek03LjYwNyAxLjI1QzcuNzIuNTA3IDguMzQ0LS4wMTMgOS4wMyAwYy45OC4wMTkgMS41NjMuODMzIDEuNzY2IDEuMjM1LjM3LjczNS4zOCAxLjk0Ni4xMjYgMi43MjQtLjIzLjcwNC0uNzYxIDEuNjI5LS43NjEgMS42MjloMy45ODJjLjQyIDAgLjgxMS4yMDYgMS4wNzIuNTYzYTEuNSAxLjUgMCAwIDEgLjIzMiAxLjI3MmwtMS44MDEgNi41MTNjLS4xNjQuNjI3LS43MDcgMS4wNjQtMS4zMiAxLjA2NEg0LjVWNS44OThDNi4yOTkgNS41MSA3LjQwNCAyLjU5IDcuNjA3IDEuMjQ5eiIvPgo8L3N2Zz4K);
  }
}
</style>
