<template>
  <div class="progress">
    <div class="progress__text-content">
      <p class="progress__title">{{ title }}</p>
      <p class="progress__text">{{ this.profit }}</p>
    </div>
    <div class="progress__substrate"></div>
    <div
      class="progress__main"
      :style="`background-color: ${this.bgColor}; width: ${this.width}`"
      >
    </div>
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
  data() {
    return {
      bgColor: `#${this.info[0].Color}`,
      width: '',
      profit: `+${this.info[0].Amount}$`,
    }
  },
  created() {
    const fullAmount = 1000;
    const calcPart = this.info[0].Amount/fullAmount;
    this.width = `${calcPart * 100}%`;
  },
}
</script>

<style lang="less" scoped>
@import './v-progress-bar.less';
</style>