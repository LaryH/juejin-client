<template>
  <div class="header">
    Header...
    <Container />
  </div>
</template>

<script>
import Container from "@/components/Container";
export default {
  name: "Header",
  components: {
    Container,
  },
};
</script>

<style lang="less" scoped>
.header {
  color: red;
}
</style>
