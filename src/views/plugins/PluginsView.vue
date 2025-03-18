<script>
export default {
    data() {
      return {
        downloads: []
      };
    },
    mounted() {
      // JSON-Daten von GitHub laden - https://raw.githubusercontent.com/tsgscraft/tsgscraft.com/refs/heads/master/public/files.json
      fetch('files.json')
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
    openUrl(url) {
      if (!url) {
        console.error('Keine gültige URL zum Herunterladen angegeben.');
        return;
      }
      // Navigiert zur angegebenen URL, was den Download der Datei auslöst
      window.location.href = url;
    },
    copyText(text) {
      if (!text) {
        console.error('Kein gültiger Text angegeben.');
        return;
      }

      navigator.clipboard.writeText(text);
    },
  },
};
</script>

<template>
  <body>
  <div class="p-4" style="padding: 5rem 2rem 2rem;">
    <div id="card-container">
      <!-- Dynamisch Karten erstellen -->
      <div v-for="item in downloads" :key="item.name" class="card">
        <div class="container">
          <h2><b>{{ item.name }}</b></h2>
          <p>{{ item.beschreibung }}</p>
          <div class="card-buttons">
            <button @click="openUrl(item.repo + '/releases/latest/download/' + item.file_name)" type="button" class="button-1 card-button" :disabled="item.disabled"><img src="/src/assets/icons/download.svg" alt="download" class="icon"></button>
            <button @click="openUrl(item.repo + '/releases')" type="button" class="button-2 card-button" :disabled="item.disabled"><img src="/src/assets/icons/version.svg" alt="versions" class="icon"></button>
            <button @click="openUrl(item.repo)" type="button" class="button-4 card-button" :disabled="item.disabled"><img src="/src/assets/icons/github-mark.svg" alt="github" class="icon"></button>
            <button @click="copyText(item.repo + '/releases/latest/download/' + item.file_name)" type="button" class="button-3 card-button" :disabled="item.disabled"><img src="/src/assets/icons/copy.svg" alt="copy" class="icon"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<style scoped>
body {
  background-image: url('/src/assets/pictures/minecraft1.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: 50%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

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
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
  flex-grow: 1;
}

.card-buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: auto;
}

.icon {
  width: 20px;
  height: 20px;
  display: flex;
}

.card-button {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
  margin: 1rem auto auto;
  justify-items: center;
}

.card-button:focus:not(:focus-visible) {
  box-shadow: none;
  outline: none;
}

.card-button:hover {
  background-color: #2c974b;
}

.card-button:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.card-button:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

.card-button:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-1 {
  background-color: #2ea44f;
}

.button-2 {
  background-color: #dab52f;
}

.button-3 {
  background-color: #c01515;
}

.button-4 {
  background-color: #0d74e7;
}

.button-1:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
}

.button-2:focus {
  box-shadow: rgba(218, 181, 47, .4) 0 0 0 3px;
}

.button-3:focus {
  box-shadow: rgba(192, 21, 21, 0.4) 0 0 0 3px;
}

.button-4:focus {
  box-shadow: rgb(13, 116, 231) 0 0 0 3px;
}

.button-1:hover {
  background-color: #2c974b;
}

.button-2:hover {
  background-color: #cba92c;
}

.button-3:hover {
  background-color: #b61414;
}

.button-4:hover {
  background-color: #0b6bd5;
}

.button-1:active {
  background-color: #298e46;
}

.button-2:active {
  background-color: #ab8e25;
}

.button-3:active {
  background-color: #911010;
}

.button-4:active {
  background-color: #085cbb;
}

.button-1:disabled {
  background-color: #94d3a2;
}

.button-2:disabled {
  background-color: #dac78b;
}

.button-3:disabled {
  background-color: #e06565;
}

.button-4:disabled {
  background-color: #8db7f5;
}
</style>
