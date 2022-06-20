<template>
<VLoadElem v-if="isLoading" />
  <section v-else class="container">
      <div class="container__card">
        <VCard 
          v-for="item in items" 
          :key="item" 
          :item="item"
        />
      </div>
    </section>
</template>

<script>
import VCard from './components/VCard/VCard.vue'
import VLoadElem from './components/VLoadElem/VLoadElem.vue'

export default {
  name: 'App',
  components: {
    VCard,
    VLoadElem,
  },

  created() {
    this.getPhotoData();
  },

  data() {
    return {
      items: [],
      isLoading: false,
    }
  },
  methods: {
    async getPhotoData() {
      this.isLoading = true;
      const API_URL = 'https://api.in.dev-team.club/people?pp=10&p=1';
      try {
          const response = await fetch(API_URL);
          const data = await response.json();
          this.items = data;
          this.isLoading = false;
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>
