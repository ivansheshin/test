<template>
  <section class="app">
    <VCard v-for="item in items" :key="item" :src="item.Photo"/>
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


  created() {
    this.getPhotoSrc();
  },

  data() {
    return {
      items: [],
    }
  },
  methods: {
    async getPhotoSrc() {
      const API_URL = 'https://api.in.dev-team.club/people?pp=10&p=1';

      await fetch(API_URL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.items = data;
        })
        .catch((error) => console.error(error));
    }
  }
}
</script>
