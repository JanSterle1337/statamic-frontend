<template>
    <div class="detailed-article">
      <h2>Article Details</h2>
      <div v-if="article" class="article-details">
        <div class="article-id">{{ article.data.id }}</div>
        <div class="article-title">{{ article.data.title }}</div>
        <div class="article-title">{{ article.data.content }}</div>
        <!-- Add other article details here -->
      </div>
    </div>
  </template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';

const article = ref(null);
const route = useRoute();



onMounted(async () => {
  try {
    console.log(route.params.id);

    const response = await axios.get(`http://cyberspace-place.test/api/collections/articles/entries/${route.params.id}`);
    article.value = response.data;
    console.log(article.value);
  } catch (error) {
    console.error('Error fetching article: ', error);
  }
});
</script>

<style scoped>
.detailed-article {
  padding: 20px;
}

.article-details {
  margin-top: 20px;
}
</style>