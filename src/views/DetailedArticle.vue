<template>
    <div class="detailed-article">
      <h2>Article Details</h2>
      <div v-if="article" class="article-details">
        <h1 class="article-id">{{ article.data.title }} : {{ article.data.id }}</h1>
        <div class="article-title">{{ article.data.content }}</div>
        <!-- Add other article details here -->
      </div>
      <div class="modification-btns-wrapper">
        <RouterLink :to="{ name: 'EditArticle', params: { id: route.params.id }}">
          <button class="edit-button">Edit</button>
        </RouterLink>
        <button class="delete-button">Delete</button>
      </div>
    </div>
  </template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { RouterLink, useRoute } from 'vue-router';

const article: any = ref(null);
const route = useRoute();



onMounted(async () => {
  try {
    console.log(route.params.id);

    const response = await axios.get(`http://www.moj-primer.test/api/collections/articles/entries/${route.params.id}`);
    article.value = response.data;
    console.log(article.value);
  } catch (error) {
    console.error('Error fetching article: ', error);
  }
});
</script>

<style scoped>

.edit-button {
  background-color: #007bff;
  color: #fff;
  border: 0px ;
  height: 40px;
  width: 100px;
}

.delete-button {
  background-color: #dc3545;
  color: #fff;
  margin-left: 8px;
  border: 0px;
  height: 40px;
  width: 100px;
}

.edit-button:hover, .delete-button:hover {
  opacity: 0.8;
}

.detailed-article {
  padding: 20px;
}

.article-details {
  margin-top: 20px;
}
</style>