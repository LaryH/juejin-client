<template>
  <div class="header">
    <NavList />
    <Wu />
  </div>
</template>

<script>
import NavList from '@/pages/Home/components/NavList'
import Wu from '@/pages/Home/components/Wu'
export default {
  name: "Header",
  components: {
    NavList,
    Wu
  },
};
</script>

<style lang="less" scoped>

</style>
