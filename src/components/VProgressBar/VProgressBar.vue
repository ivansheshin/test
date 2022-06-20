<template>
  <div class="progress">
    <VPersonWorkData
      title="Profit"
      :value="`${getProfit}`"
    >
      <div class="progress__substrate"></div>
      <div
        class="progress__main"
        :style="`background-color: ${getBgColor}; width: ${getWidth}`"
        >
      </div>
    </VPersonWorkData>
  </div>
</template>

<script>
import VPersonWorkData from '../VPersonWorkData/VPersonWorkData.vue';

export default {
  name: 'VProgressBar',
  components: {
    VPersonWorkData,
  },

  props: {
    info: {
      type: Array,
      required: true,
    }
  },
  computed: {
    getWidth() {
      const fullAmount = 1000;
      const calcPart = this.info[0].Amount/fullAmount;
      return `${calcPart * 100}%`;
    },
    getBgColor() {
      return `#${this.info[0].Color}`;
    },
    getProfit() {
      return `+${this.info[0].Amount}$`
    },
  },
  created() {

  },
}
</script>

<style lang="less" scoped>
@import './v-progress-bar.less';
</style>