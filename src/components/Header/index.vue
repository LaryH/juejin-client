<template>
  <div class="header">
    Header...
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "Header",
  components: {
    Sidebar,
  },
};
</script>

<style lang="less" scoped></style>
