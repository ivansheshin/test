<template>
  <div class="person-work-data">
    <div class="person-work-data__text-content">
      <p class="person-work-data__title">{{ title }}</p>
      <p class="person-work-data__text">{{ value }}</p>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'VPersonWorkData',
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="less" scoped>
@import './v-person-work-data.less';
</style>