<script setup>
import { ref, onMounted } from 'vue'

// Reaktive Variable für die Dateien
const files = ref([])

onMounted(() => {
  // JSON-Daten laden, wenn die Komponente gemountet wurde
  fetch('files.json')
      .then(response => response.json())
      .then(data => {
        files.value = data
      })
      .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error))
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl">Downloads</h1>
    <p>Hier kannst du Dateien herunterladen.</p>
    <div id="card-container">
      <!-- Dynamisch Karten erstellen -->
      <div v-for="item in files" :key="item.name" class="card">
        <div class="container">
          <h4><b>{{ item.name }}</b></h4>
          <p>{{ item.beschreibung }}</p>
          <a :href="item.datei" class="button-3" role="button" download>Download</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
