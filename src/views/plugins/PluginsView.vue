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

function testFunction (url) {
  location.href = url
}
</script>

<script>
export default {
  methods: {
    downloadFile(url) {
      if (!url) {
        console.error('Keine gültige URL zum Herunterladen angegeben.');
        return;
      }
      // Navigiert zur angegebenen URL, was den Download der Datei auslöst
      window.location.href = url;
    },
  },
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl"><router-link to="/">Downloads</router-link></h1>
    <p class="bit-left">Hier kannst du Dateien herunterladen.</p>
    <div id="card-container">
      <!-- Dynamisch Karten erstellen -->
      <div v-for="item in files" :key="item.name" class="card">
        <div class="container">
          <h2><b>{{ item.name }}</b></h2>
          <p>{{ item.beschreibung }}</p>
          <button @click="downloadFile(item.datei)" type="button" class="button-3" :disabled="item.disabled">Download</button>
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
  margin-top: 2rem;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: #282828;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

.bit-left {
  margin-left: 8px;
}
</style>
