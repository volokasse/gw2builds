<script setup lang="ts">
definePageMeta({
  middleware: ['auth-client']
})

// Ici tu peux directement fetcher les données privées
// par exemple /api/me/builds
const { data, error, pending } = await useFetch('/api/me/builds', {
  method: 'GET',
  credentials: 'include'
})
</script>

<template>
  <div class="space-y-6">
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
        <li
          v-for="b in data.builds"
          :key="b.id"
          class="rounded-lg border border-gray-800 bg-gray-900/50 p-4"
        >
          <div class="flex items-start justify-between">
            <div>
              <p class="text-white font-medium">{{ b.title }}</p>
              <p class="text-xs text-gray-400">
                ID: {{ b.id }} —
                {{ b.isPublic ? 'Public' : 'Privé' }}
              </p>
            </div>

            <div class="text-right text-xs text-gray-500">
              {{ new Date(b.createdAt).toLocaleString() }}
            </div>
          </div>

          <p class="text-xs text-gray-400 mt-2 break-all">
            Code d’archétype: {{ b.buildTemplate }}
          </p>
        </li>
      </ul>
    </div>

    <div class="pt-4">
      <NuxtLink
        to="/new-build"
        class="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-500"
      >
        Nouveau build
      </NuxtLink>
    </div>
  </div>
</template>
