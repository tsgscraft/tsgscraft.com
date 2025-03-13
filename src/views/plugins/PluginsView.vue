<script>
export default {
    data() {
      return {
        downloads: []
      };
    },
    mounted() {
      // JSON-Daten von GitHub laden
      fetch('https://raw.githubusercontent.com/tsgscraft/tsgscraft.com/refs/heads/master/public/files.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Netzwerkantwort war nicht ok');
            }
            return response.json();
          })
          .then(data => {
            this.downloads = data;
          })
          .catch(error => {
            console.error('Fehler beim Laden der JSON-Daten:', error);
          });
    },
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
      <div v-for="item in downloads" :key="item.name" class="card">
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
