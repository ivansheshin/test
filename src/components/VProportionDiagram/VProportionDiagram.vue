<template>
  <div class="proportion">
      <VPersonWorkData
        title="Attention"
        :value="`${this.getAmount}h`"
      >

      <div class="proportion__diagram-container">
        <div
          class="proportion__diagram-part"
          v-for="part in info"
          :key="part"
          :style="`background-color: #${part.Color}; width: ${this.getPartWidth(part)}`"
        ></div>
      </div>
  
    </VPersonWorkData>
  </div>
</template>

<script>
import VPersonWorkData from '../VPersonWorkData/VPersonWorkData.vue';

export default {
  name: 'VProportionDiagram',
  components: {
    VPersonWorkData,
  },
  props: {
    info: {
      type: [Array, null],
      required: true,
    },
  },
  computed: {
    getAmount() {
      if (!this.info) return 0;
      return this.info.reduce((sum, secondObj) => {
        if (!secondObj) return;
        return sum + secondObj.Amount;
      }, 0)
    }
  },

  methods: {
    getPartWidth(part) {
      const fullAmount = this.getAmount;
      return `${(fullAmount/part.Amount*100)}%`;
    },

}

}
</script>

<style lang="less" scoped>
@import './v-proportion-diagram.less';
</style>