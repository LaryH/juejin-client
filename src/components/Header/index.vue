<template>
  <div class="header">
    Header...
    <LoginCart />
  </div>
</template>

<script>
import LoginCart from "../../components/LoginCart";
export default {
  name: "Header",
  components: {
    LoginCart,
  },
};
</script>

<style lang="less" scoped>
.header {
  color: red;
}
</style>
