<template>
  <div :class="`list ${getCssData.list}`">
    <p 
      :class="`list__item ${getCssData.item}`"
      v-for="tagData in tagsData"
      :key="tagData"
      :style="`background-color: #${tagData.Color}`"
    >
      {{ tagData.Name }}
    </p>
  </div> 
</template>

<script>
  export default {
    name: 'VList',
    props: {
      mainClass: {
        type: String,
          required: true,
      },
      tagsData: {
        type: Array,
        required: true,
      }
    },
    computed: {
      getCssData() {
        return {
          list:`${this.mainClass}__list`,
          item: `${this.mainClass}__item`,
        }
      }
    }
  }
</script>

<style lang="less" scoped>
@import './v-list.less';
</style>