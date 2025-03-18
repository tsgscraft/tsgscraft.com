<template>
  <header class="App-header">
    <nav class="flex flex-wrap items-center justify-between head-nav">
      <img src="/src/assets/elements/nav.svg" alt="nav" class="img-nav">
      <h1 class="font-semibold text-xl navi-div">
        <router-link
            to="/"
            class="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Home
        </router-link>
        <router-link
            to="/plugins"
            class="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Plugins
        </router-link>
        <router-link
            to="/tools"
            class="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Tools
        </router-link>
        <router-link
            to="/python"
            class="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Python
        </router-link>
      </h1>
    </nav>
  </header>
  <router-view></router-view>
</template>

<style scoped>
.head-nav {
  display: flex;
  width: 20%;
}

.img-nav {
  height: 5rem;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.navi-div {
  font-size: xx-large;
  position: absolute;
  top: 0.6rem;
  left: 1rem;
}

.App-header {
  position: relative;
}
</style>

<script setup>
</script>
