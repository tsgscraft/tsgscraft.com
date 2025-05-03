<!-- src/views/NotFound.vue -->
<template>
  <div class="not-found">
    <h1>Seite nicht gefunden (404)</h1>
    <p>Die angeforderte Seite existiert nicht.</p>
    <router-link to="/">Zur Startseite</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 2rem;
}
.not-found h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
