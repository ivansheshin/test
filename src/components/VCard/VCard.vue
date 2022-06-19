<template>
  <div class="card">
    <img class="card__img" width="200" height="150" :src="src">
    <div class="card__text-content">
      <h3 class="card__title"> {{ title }} </h3>
      <p class="card__name">{{ name }}</p>
    </div>
    <VList
      mainClass="card"
      :tagsData="tagsData"
    />
  </div>
</template>

<script>
import VList from '../VList/VList.vue';

export default {
  name: 'VCard',
  components: {
    VList,
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
    }
  },
}
</script>

<style lang="less" scoped>
@import "./v-card.less";
</style>
