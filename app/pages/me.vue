<script setup lang="ts">
definePageMeta({
  middleware: ['auth-client']
})

import NewBuild from '~/components/NewBuild.vue';

// Ici tu peux directement fetcher les données privées
// par exemple /api/me/builds
const { data, error, pending } = await useFetch('/api/me/builds', {
  method: 'GET',
  credentials: 'include'
})
</script>

<template>
  <div class="space-y-6 relative">
    <NewBuild />
    <h1 class="text-2xl font-semibold text-white">
      Mes builds
    </h1>

    <div v-if="pending">
      <p class="text-gray-400 text-sm">Chargement…</p>
    </div>

    <div v-else-if="error">
      <p class="text-red-400 text-sm">Erreur de chargement.</p>
    </div>

    <div v-else>
      <div v-if="!data?.builds?.length" class="text-gray-400 text-sm">
        Aucun build pour l’instant.
      </div>

      <ul v-else class="grid gap-4">
        <BuildShelf />
      </ul>
    </div>
  </div>
</template>
