<template>
  <div class="card">
    <img class="card__img" width="200" height="150" :src="src">
    <div class="card__main-content">
      <h3 class="card__title"> {{ title }} </h3>
      <p class="card__name">{{ name }}</p>
    </div>
    <VList
      mainClass="card"
      :tagsData="tagsData"
    />
    <VProgressBar
      :info="profit"
    />
  </div>
</template>

<script>
import VList from '../VList/VList.vue';
import VProgressBar from '../VProgressBar/VProgressBar.vue';

export default {
  name: 'VCard',
  components: {
    VList,
    VProgressBar,
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
    }
  },
}
</script>

<style lang="less" scoped>
@import "./v-card.less";
</style>
