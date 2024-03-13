<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-wrapper">
    <!-- Navigation bar -->
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <!-- Router view -->
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Set full viewport height */
  width: 100vw;
  
}

.navbar {
  flex: 0 0 auto; /* Non-flexible fixed height */
  background-color: #333; /* Example background color */
  padding: 10px;
  width: 100%; /* Extend navbar to 100% of the width */
}

.router-view {
  flex: 1; /* Flex to fill remaining space */
  overflow-y: auto; /* Enable vertical scrolling if content exceeds viewport */
}
</style>
