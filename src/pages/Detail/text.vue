<template>
  <div>
    <p>我为当前项目测试了一些本地存储库。想知道他们有什么很棒的功能吗？继续阅读。</p>
    <h2 data-id="heading-0">Local Storage Bridge</h2>
    <p>
      <a
        href="https://github.com/krasimir/lsbridge"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >github.com/krasimir/ls…</a>
    </p>
    <p>如果你必须在同一个浏览器中从一个标签页发送消息到另一个标签页，你不必用艰难的方式。Local storage bridge在这里让任务变得更简单。</p>
    <p>基本使用：</p>
    <pre><code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-comment">// 发送</span>
lsbridge.send(‘app.message.error’, { <span class="hljs-attr">error</span>: ‘Out <span class="hljs-keyword">of</span> memory’ });

<span class="hljs-comment">// 监听</span>
lsbridge.subscribe(‘app.message.error’, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">data</span>) </span>{
  <span class="hljs-built_in">console</span>.log(data); <span class="hljs-comment">// { error: ‘Out of memory’ }</span>
});
<span class="copy-code-btn">复制代码</span></code></pre>
    <h2 data-id="heading-1">Basil.js</h2>
    <p>
      <img
        class="lazyload inited loaded"
        data-src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5836957daec41df8d8e1ea80288a78a~tplv-k3u1fbpfcp-watermark.webp"
        data-width="800"
        data-height="600"
        src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5836957daec41df8d8e1ea80288a78a~tplv-k3u1fbpfcp-watermark.webp"
      />
    </p>
    <p>Basil.js统一了session、localStorage和cookie，为你提供了一种处理数据的直接方法。</p>
    <p>基本使用：</p>
    <pre><code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-keyword">let</span> basil = <span class="hljs-keyword">new</span> Basil(options);

basil.set(‘name’, ‘Amy’);
basil.get(‘name’);
basil.remove(‘name’);
basil.reset();
<span
  class="copy-code-btn"
>复制代码</span></code></pre>
    <h2 data-id="heading-2">store.js</h2>
    <p>
      <a
        href="https://github.com/marcuswestin/store.js"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >github.com/marcuswesti…</a>
    </p>
    <p>Store.js像其他东西一样处理数据存储。但还有更多的功能，它的一个高级特性是让你更深入地访问浏览器支持。</p>
    <p>基本使用：</p>
    <pre><code class="hljs language-javascript copyable" lang="javascript">store.set(‘book’, { <span class="hljs-attr">title</span>: ‘JavaScript’ }); <span class="hljs-comment">// Store a book</span>
store.get(‘book’); <span class="hljs-comment">// Get stored book</span>
store.remove(‘book’); <span class="hljs-comment">// Remove stored book</span>
store.clearAll(); <span class="hljs-comment">// Clear all keys</span>
<span class="copy-code-btn">复制代码</span></code></pre>
    <h2 data-id="heading-3">lscache</h2>
    <p>
      <a
        href="https://github.com/pamelafox/lscache"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >github.com/pamelafox/l…</a>
    </p>
    <p>它与localStorage API类似。事实上，它是localStorage的一个封装器，并使用HTML5模拟memcaches函数。在上面的文档中发现更多的功能。</p>
    <p>基本使用：</p>
    <pre><code class="hljs language-javascript copyable" lang="javascript">lscache.set(‘name’, ‘Amy’, <span class="hljs-number">5</span>); <span class="hljs-comment">// 数据将在5分钟后过期</span>
lscache.get(‘name’);
<span class="copy-code-btn">复制代码</span></code></pre>
    <h2 data-id="heading-4">Lockr</h2>
    <p>
      <img
        class="lazyload inited"
        data-src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ced88bcff45d40b7826bcbde1883b999~tplv-k3u1fbpfcp-watermark.webp"
        data-width="800"
        data-height="600"
        src="data:image/svg+xml;utf8,<?xml version=&quot;1.0&quot;?><svg xmlns=&quot;http://www.w3.org/2000/svg&quot; version=&quot;1.1&quot; width=&quot;800&quot; height=&quot;600&quot;></svg>"
      />
    </p>
    <p>Lockr建立在localStorage API之上。它提供了一些有用的方法来更轻松地处理本地数据。</p>
    <p>是什么让你要使用此库而不是localStorage API？</p>
    <p>好吧，localStorage API仅允许你存储字符串。如果要存储数字，则需要先将该数字转换为字符串。在Lockr中不会发生这种情况，因为Lockr允许你存储更多的数据类型甚至对象。</p>
    <p>基本使用：</p>
    <pre><code class="hljs language-javascript copyable" lang="javascript">Lockr.set(‘name’, ‘Amy’);
Lockr.set(‘age’, <span class="hljs-number">28</span>);
Lockr.set(‘books’, [{<span class="hljs-attr">title</span>: ‘JavaScript’, <span class="hljs-attr">price</span>: <span class="hljs-number">11.0</span>}, {<span class="hljs-attr">title</span>: ‘Python’, <span class="hljs-attr">price</span>: <span class="hljs-number">9.0</span>}]);
<span class="copy-code-btn">复制代码</span></code></pre>
    <h2 data-id="heading-5">Barn</h2>
    <p>
      <a
        href="https://github.com/arokor/barn"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >github.com/arokor/barn</a>
    </p>
    <p>Barn在localStorage之上提供了一个类似Redis的API。如果持久性很重要，那么你将需要这个库来保持数据状态，以防发生错误。</p>
    <p>基本使用：</p>
    <pre><code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-keyword">let</span> barn = <span class="hljs-keyword">new</span> Barn(<span class="hljs-built_in">localStorage</span>);

<span class="hljs-comment">// 原始类型</span>
barn.set(‘name’, ‘Amy’);
<span class="hljs-keyword">let</span> name = barn.get(‘name’); <span class="hljs-comment">// Amy</span>

<span class="hljs-comment">// List</span>
barn.lpush(‘names’, ‘Amy’);
barn.lpush(‘names’, ‘James’);
<span class="hljs-keyword">let</span> name1 = barn.rpop(‘names’); <span class="hljs-comment">// Amy</span>
<span class="hljs-keyword">let</span> name2 = barn.rpop(‘names’); <span class="hljs-comment">// James</span>
<span class="copy-code-btn">复制代码</span></code></pre>
    <h2 data-id="heading-6">localForage</h2>
    <p>
      <a
        href="https://github.com/localForage/localForage"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >github.com/localForage…</a>
    </p>
    <p>这个简单而快速的库将通过IndexedDB或WebSQL使用异步存储来改善Web的脱机体验。它类似于localStorage，但具有回调功能。</p>
    <p>基本使用：</p>
    <pre><code
  class="hljs language-javascript copyable"
  lang="javascript"
>localforage.setItem(‘name’, ‘Amy’, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">error, value</span>) </span>{
  <span class="hljs-comment">// Do something</span>
});

localforage.getItem(‘name’, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">error, value</span>) </span>{
  <span class="hljs-keyword">if</span> (error) {
    <span class="hljs-built_in">console</span>.log(‘an error occurs’);
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">// Do something with the value</span>
  }
});
<span class="copy-code-btn">复制代码</span></code></pre>
    <p>
      很神奇的是它提供
      <a
        href="https://localforage.docschina.org/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >中文文档</a>
    </p>
    <h2 data-id="heading-7">crypt.io</h2>
    <p>
      <a
        href="https://github.com/jas-/crypt.io"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >github.com/jas-/crypt.…</a>
    </p>
    <p>crypt.io使用标准JavaScript加密库实现安全的浏览器存储。使用crypto.io时，有三个存储选项：sessionStorage，localStorage或cookie。</p>
    <p>基本使用：</p>
    <pre><code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-keyword">let</span> storage = crypto;
<span class="hljs-keyword">let</span> book = { <span class="hljs-attr">title</span>: ‘JavaScript’, <span class="hljs-attr">price</span>: <span class="hljs-number">13</span> };

storage.set(‘book’, book, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">error, results</span>) </span>{
  <span class="hljs-keyword">if</span> (error) {
    <span class="hljs-keyword">throw</span> error;
  }
  
  <span class="hljs-comment">// Do something</span>
});

storage.get(‘book’, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">error, results</span>) </span>{
  <span class="hljs-keyword">if</span> (error) {
    <span class="hljs-keyword">throw</span> error;
  }
  <span class="hljs-comment">// Do something</span>
});
<span class="copy-code-btn">复制代码</span></code></pre>
    <hr />
    <p>你还知道其他本地存储库吗？为什么使用它？在下面的评论中让我知道！</p>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less" scoped>
</style>
