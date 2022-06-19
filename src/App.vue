<template>
  <section class="container">
    <div class="container__card">
      <VCard 
        v-for="item in items" 
        :key="item" 
        :src="item.Photo"
        :title="item.Title"
        :name="item.Name"
        :tagsData="item.Tags"
      />
    </div>
  </section>
</template>

<script>
import VCard from './components/VCard/VCard.vue'

export default {
  name: 'App',
  components: {
    VCard
  },

  created() {
    this.getPhotoData();
  },

  data() {
    return {
      items: [],
    }
  },
  methods: {
    async getPhotoData() {
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
