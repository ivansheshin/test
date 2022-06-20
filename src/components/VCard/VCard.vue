<template>
  <div class="card">
    <img class="card__img" width="200" height="150" :src="src">
    <div class="card__main-content">
      <h3 class="card__title"> {{ title }} </h3>
      <p class="card__name">{{ name }}</p>
      <VProgressBar
        :info="profit"
      />
      <VProportionDiagram
        :info="attention"
      />
    </div>

    <VList
      mainClass="card"
      :tagsData="tagsData"
    />
  </div>
</template>

<script>
import VList from '../VList/VList.vue';
import VProgressBar from '../VProgressBar/VProgressBar.vue';
import VProportionDiagram from '../VProportionDiagram/VProportionDiagram.vue';

export default {
  name: 'VCard',
  components: {
    VList,
    VProgressBar,
    VProportionDiagram,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tagsData: {
        type: Array,
        required: true,
    },
    profit: {
      type: Array,
      required: true,
    },
    attention: {
      type: [Array, null],
      required: true,
    }

  },
}
</script>

<style lang="less" scoped>
@import "./v-card.less";
</style>
