<template>
    <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <!-- Navbar -->
      <nav class="p-4 shadow-md bg-gray-100 dark:bg-gray-800">
        <div class="container mx-auto flex justify-between">
          <h1 class="text-xl font-bold">My Vue Site</h1>
          <ul class="flex gap-4">
            <li><a href="#home" class="hover:underline">Home</a></li>
            <li><a href="#downloads" class="hover:underline">Downloads</a></li>
          </ul>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="home" class="text-center py-16 bg-gray-200 dark:bg-gray-700">
        <h2 class="text-3xl font-bold">Welcome to My Vue Site</h2>
        <p class="mt-2">A simple Vue 3 website with sections.</p>
      </section>

      <!-- Downloads Section -->
      <section id="downloads" class="py-16 bg-gray-200 dark:bg-gray-700 text-center">
        <h2 class="text-2xl font-bold">Downloads</h2>
        <p class="mt-2">Get the latest files from our downloads page.</p>
        <a href="/downloads" class="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Go to Downloads
        </a>
      </section>
    </div>
</template>