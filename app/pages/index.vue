<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/builds/latest', {
  method: 'GET'
})
</script>

<template>
  <div class="space-y-6">
    <header class="space-y-1">
      <h1 class="text-2xl font-semibold text-white">
        Derniers builds publics
      </h1>
      <p class="text-sm text-gray-400">
        Builds récemment partagés par la communauté.
      </p>
    </header>

    <div v-if="pending">
      <p class="text-sm text-gray-400">Chargement…</p>
    </div>

    <div v-else-if="error">
      <p class="text-sm text-red-400">Impossible de charger les builds.</p>
    </div>

    <div v-else>
      <div v-if="!data?.builds?.length" class="text-sm text-gray-400">
        Aucun build public pour le moment.
      </div>

      <div v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="b in data.builds"
          :key="b.id"
          class="bg-gray-900/50 border border-gray-800"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <h2 class="text-white font-medium">
                {{ b.title }}
              </h2>
              <p class="text-xs text-gray-400">
                par
                <NuxtLink
                  :to="`/u/${b.owner?.username}`"
                  class="text-red-400 hover:underline"
                >
                  {{ b.owner?.username }}
                </NuxtLink>
              </p>
            </div>
            <UBadge color="primary" variant="soft" v-if="b.isPublic">
              Public
            </UBadge>
          </div>

          <p class="text-xs text-gray-400 mt-3 break-all">
            {{ b.buildTemplate }}
          </p>

          <div class="flex gap-2 mt-4">
            <UButton
              :to="`/build/${b.id}`"
              size="xs"
              color="primary"
            >
              Voir le build
            </UButton>
            <UButton
              :to="`/u/${b.owner?.username}`"
              size="xs"
              variant="ghost"
            >
              Voir le profil
            </UButton>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
