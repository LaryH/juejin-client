<template>
  <div class="timeline-content">
    <div class="entry-list-container">
      <header>
        <nav>
          <ul>
            <li><a href="">热门</a></li>
            <li><a href="">最新</a></li>
            <li><a href="">热榜</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="less" scoped>
.timeline-content {
  width: 960px;
  background-color: blueviolet;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -25%);
  .entry-list-container {
    width: 700px;
    background-color: burlywood;
  }
}
</style>
