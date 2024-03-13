<template>
    <div>
      <h2>Edit Article</h2>
      <form @submit.prevent="submitForm" class="edit-article-form">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" required class="form-control">
        </div>
        
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea id="content" required v-model="content" class="form-control area-container"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click="saveEditedArticle">Save Changes</button>
      </form>
    </div>
</template>
  
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { RouterLink, useRoute } from 'vue-router';


  let title = ref('');
  let content = ref('');  

  const article: any = ref(null);
  const route = useRoute();


  onMounted(async () => {
    try {
        console.log(route.params.id);

        const response = await axios.get(`http://www.moj-primer.test/api/collections/articles/entries/${route.params.id}`);
        article.value = response.data;

        title = article.value.data.title;
        content = article.value.data.content;

        console.log(`Title: ${title} and Content: ${content}`);
    } catch (error) {
        console.error('Error fetching article', error);
    }
  });


 async function saveEditedArticle() {

    const data = {
        title: title,
        content: content,
        oldTitle: article.value.data.title
    };


    axios.put(`http://www.moj-primer.test/api/articles/${title}`, JSON.stringify(data))
        .then(response => {
            if (response.status === 200) {
                console.log('Article updated successfully');
                console.log(response.data);
            } else {
                console.error('Failed to update article');
            }
        })
        .catch(error => {
            console.error('Error updating article:', error);
        });

  }

  
  const submitForm = () => {
    // Here you can send the updated article data to your backend for saving
    console.log('Updated Article:', article.value);
    // Example: You might use Axios or fetch to send the data to your Laravel backend
  };
</script>

<style scoped>
.edit-article-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}

.area-container {
    height: 200px;
  
}
</style>