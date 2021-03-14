<template>
  <div>
    <div
      class="fixed top-0 h-20 w-screen bg-white flex items-center shadow-md bg-indigo-500"
    >
      <nuxt-link to="/" class="ml-8 hover:bg-indigo-600 px-4 py-3 rounded-md">
        <span class="text-4xl font-bold text-white border-b-2 border-white">
          dev.to feed
        </span>
      </nuxt-link>
    </div>
    <div class="">
      <div class="pt-28 lg:max-w-4xl mx-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
