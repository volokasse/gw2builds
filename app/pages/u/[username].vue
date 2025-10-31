<script setup lang="ts">
const route = useRoute()
const username = route.params.username as string

const { data, pending, error } = await useFetch(`/api/users/${username}/builds`, {
  method: 'GET'
})

// Meta pour le partage (Discord, etc.)
useHead(() => ({
  title: data.value?.user
    ? `Builds de ${data.value.user.username} · GW2 Builds`
    : 'Profil utilisateur · GW2 Builds',
  meta: [
    {
      name: 'description',
      content: data.value?.user
        ? `Builds publics partagés par ${data.value.user.username} sur GW2 Builds.`
        : 'Builds publics d’un utilisateur sur GW2 Builds.'
    },
    {
      property: 'og:title',
      content: data.value?.user
        ? `Builds de ${data.value.user.username}`
        : 'Profil utilisateur'
    }
  ]
}))
</script>

<template>
  <div class="space-y-6">
    <div v-if="pending">
      <p class="text-sm text-gray-400">Chargement…</p>
    </div>

    <div v-else-if="error">
      <p class="text-sm text-red-400">
        Utilisateur introuvable ou erreur de chargement.
      </p>
    </div>

    <div v-else>
      <header class="space-y-1">
        <h1 class="text-2xl font-semibold text-white">
          Builds publics de {{ data?.user?.username }}
        </h1>
        <p class="text-sm text-gray-400">
          Consultation publique. Aucune édition.
        </p>
      </header>

      <div v-if="!data?.builds?.length" class="text-sm text-gray-400">
        Aucun build public pour cet utilisateur.
      </div>

      <div v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="b in data.builds"
          :key="b.id"
          class="bg-gray-900/50 border border-gray-800"
        >
          <h2 class="text-white font-medium">
            {{ b.title }}
          </h2>
          <p class="text-xs text-gray-400 mt-1 break-all">
            {{ b.buildTemplate }}
          </p>

          <div class="flex gap-2 mt-4">
            <UButton
              :to="`/build/${b.id}`"
              size="xs"
              color="primary"
            >
              Voir
            </UButton>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
