<template>
    <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">

      <!-- Hero Section -->
      <section id="home" class="text-center py-16 bg-gray-200 dark:bg-gray-700">
        <h1 class="text-3xl font-bold">This is a simple website for my Minecraft Plugins</h1>
      </section>

      <!-- Downloads Section -->
      <section id="downloads" class="py-16 bg-gray-200 dark:bg-gray-700 text-center">
        <h2 class="text-2xl font-bold">Downloads</h2>
        <router-link
            to="/plugins"
            class="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Go to Downloads
        </router-link>
      </section>
    </div>
</template>