<template>
    <header class="header">
      <h1 class="text-lg font-bold">tsgscraft.com</h1>
      <h3 class="text-lg font-bold">Navigation</h3>
      <nav class="header">
        <ul class="flex gap-2">
          <li class="sideways"><router-link to="/">Home</router-link></li>
          <li class="sideways"><router-link to="/downloads">Downloads</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="flex-1 p-4 mt-20">
      <router-view></router-view>
    </main>
</template>

<script setup>
</script>

<style>
body {
  margin: 0;
}

main {
  position: fixed;
}

.header h1 {
  position: absolute;
  top: 0;
  left: 20px;
}

.header h3 {
  position: absolute;
  top: 80px;
  left: 30px;
}

.header nav {
  position: absolute;
  top: 110px;
  left: 0;
}

.sideways {
  display: inline;
}
</style>
