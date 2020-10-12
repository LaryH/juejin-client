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
          </div>
        </div>
      </article>
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
  color: #909090;
}
.timeline-entry-list {
  width: 960px;
  // 居中
  position: absolute;
  left: 0;
  right: 0;
  margin: 1.767rem auto;
  // z-index: -1;
  // margin-top: 1.767rem;
  background-color: rgb(228, 248, 232);

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
          color: #666;
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
        }
        pre > code {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          background: #f8f8f8;
          color: #998;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

