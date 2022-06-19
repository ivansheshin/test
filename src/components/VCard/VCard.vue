<template>
  <div class="card">
    <img :src="src">
  </div>
</template>

<script>
export default {
  name: 'VCard',
  props: {
    src: String,
  }
}
</script>

<style lang="less" scoped>
  @import "./v-card.less";
</style>
