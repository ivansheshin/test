<template>
  <div class="progress">
    <div class="progress__main"></div>
    <div class="progress__substrate"></div>
  </div>
</template>

<script>
export default {
  name: 'VProgressBar',
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="less" scoped>
@import './v-progress-bar.less';
</style>