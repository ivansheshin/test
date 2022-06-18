<template>
  <section class="app">
    <VCard :shluha="heh"/>
    <div class="card">
      {{ data }}
    </div>
    <ul>
      <li 
        v-for="item in items"
        :key="item"
      >
        {{ item.Photo }}
      </li>
    </ul>
  </section>
</template>

<script>
import VCard from './components/VCard/VCard.vue'

export default {
  name: 'App',
  components: {
    VCard
  },

  props: {
    data: String,
  },

  data() {
    return {
      items: [],
    }
  },
  methods: {
    
  }
}
</script>
