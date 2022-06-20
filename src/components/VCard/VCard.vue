<template>
  <div class="card">
    <img class="card__img" width="200" height="150" :src="item.Photo">
    <div class="card__main-content">
      <h3 class="card__title"> {{ item.Title }} </h3>
      <p class="card__name">{{ item.Name }}</p> 
      <VProgressBar
        :info="item.Profit"
      />
      <VProportionDiagram
        :info="item.Attention"
      />
    </div>

    <VList
      mainClass="card"
      :tagsData="item.Tags"
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
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
@import "./v-card.less";
</style>
