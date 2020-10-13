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
                微信搜索【前端全栈开发者】关注这个脱发、摆摊、
                <a href="https://store.zhangbing.site">卖货</a>
                、持续学习的程序员，第一时间阅读最新文章，会优先两天发表新文章。关注即可大礼包，准能为你节省不少钱！
              </p>
            </blockquote>
            <p>我为当前项目测试了一些本地存储库。想知道他们有什么很棒的功能吗？继续阅读。</p>
            <h2 data-id="heading-0">Local Storage Bridge</h2>
            <p>
              <a href="https://github.com/krasimir/lsbridge">github.com/krasimir/ls…</a>
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
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5836957daec41df8d8e1ea80288a78a~tplv-k3u1fbpfcp-watermark.webp"
                class="lazyload inited loaded"
                style="width: 652px;"
              />
            </p>
            <p>Basil.js统一了session、localStorage和cookie，为你提供了一种处理数据的直接方法。</p>
            <p>基本使用：</p>
            <pre>
              <code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-keyword">let</span> basil = <span class="hljs-keyword">new</span> Basil(options);
basil.set(‘name’, ‘Amy’);
basil.get(‘name’);
basil.remove(‘name’);
basil.reset();
<span
  class="copy-code-btn"
>复制代码</span></code>
          </pre>
            <h2 data-id="heading-2">store.js</h2>
            <p>
              <a href="https://github.com/marcuswestin/store.js">github.com/marcuswesti…</a>
            </p>
            <p>Store.js像其他东西一样处理数据存储。但还有更多的功能，它的一个高级特性是让你更深入地访问浏览器支持。</p>
            <h2 data-id="heading-3">lscache</h2>
            <p>
              <a href="https://github.com/pamelafox/lscache">github.com/pamelafox/l…</a>
            </p>
            <p>它与localStorage API类似。事实上，它是localStorage的一个封装器，并使用HTML5模拟memcaches函数。在上面的文档中发现更多的功能。</p>
            <h2 data-id="heading-4">Lockr</h2>
            <p>
              <img
                class="lazyload inited loaded"
                src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ced88bcff45d40b7826bcbde1883b999~tplv-k3u1fbpfcp-watermark.webp"
              />
            </p>
            <p>Lockr建立在localStorage API之上。它提供了一些有用的方法来更轻松地处理本地数据。</p>
            <p>是什么让你要使用此库而不是localStorage API？</p>
            <p>好吧，localStorage API仅允许你存储字符串。如果要存储数字，则需要先将该数字转换为字符串。在Lockr中不会发生这种情况，因为Lockr允许你存储更多的数据类型甚至对象。</p>
            <h2 data-id="heading-5">Barn</h2>
            <p>
              <a href="https://github.com/arokor/barn">github.com/arokor/barn</a>
            </p>
            <p>Barn在localStorage之上提供了一个类似Redis的API。如果持久性很重要，那么你将需要这个库来保持数据状态，以防发生错误。</p>
            <h2 data-id="heading-6">localForage</h2>
            <p>
              <a href="https://github.com/localForage/localForage">github.com/localForage…</a>
            </p>
            <p>这个简单而快速的库将通过IndexedDB或WebSQL使用异步存储来改善Web的脱机体验。它类似于localStorage，但具有回调功能。</p>
            <p>
              很神奇的是它提供
              <a href="https://localforage.docschina.org/">中文文档</a>
            </p>
            <h2 data-id="heading-7">crypt.io</h2>
            <p>
              <a href="https://github.com/jas-/crypt.io">github.com/jas-/crypt.…</a>
            </p>
            <p>crypt.io使用标准JavaScript加密库实现安全的浏览器存储。使用crypto.io时，有三个存储选项：sessionStorage，localStorage或cookie。</p>
            <hr />
            <p>你还知道其他本地存储库吗？为什么使用它？在下面的评论中让我知道！</p>
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
          <div
            class="banner-content"
          >打开新标签页发现好内容，掘金、GitHub、Dribbble、ProductHunt 等站点内容轻松获取。快来安装掘金浏览器插件获取高质量内容吧！</div>
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
  </div>
</template>

<script>
export default {
  name: "",
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
}
</style>

