<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const articles: any = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://www.moj-primer.test/api/collections/articles/entries?fields=id,title');
    articles.value = response.data.data;
  } catch (error) {
    console.error('Error fetching articles', error);
  }
});


</script>

<template>
  <main class="article-list">
    <h1>Listed articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.id" class="article-item">
        <RouterLink :to="{ name: 'DetailedArticle', params: { id: article.id } }">
          <div class="article-id">{{ article.id }}</div>
          <div class="article-title">{{ article.title }}</div>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.article-list {
  padding: 20px;
}

.article-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.article-id {
  flex: 0 0 auto; /* Non-flexible width */
  width: 300px; /* Adjust width as needed */
  font-weight: bold;
  margin-right: 10px;
}

.article-title {
  flex: 1; /* Flexible width to fill remaining space */
}
</style>