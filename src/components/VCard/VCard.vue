<template>
  <div class="card">
    {{ shluha }}
  </div>
</template>

<script>
export default {
  name: 'VCard',
  props: {
    shluha: String,
  }
}
</script>

<style lang="less" scoped>
  @import "./v-card.less";
</style>
