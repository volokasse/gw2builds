<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string

// on décrit le shape exact que renvoie /api/builds/[id]
interface BuildDetailResponse {
  ok: boolean
  build: {
    id: number
    title: string
    createdAt: string
    buildTemplate: string
    buildClass: number
    buildSpec: number
    buildEquipment: string
    isPublic: boolean
    slug: string | null
    ownerId: number
    owner: {
      id: number
      username: string
    } | null
  }
}

const { data, pending, error } = await useFetch<BuildDetailResponse>(`/api/builds/${id}`, {
  method: 'GET',
  credentials: 'include'
})

// SEO / partage
watchEffect(() => {
  if (!data.value?.build) return

  const title = data.value.build.title
  const owner = data.value.build.owner?.username
  const isPublic = data.value.build.isPublic

  useHead({
    title: `${title} · GW2 Builds`,
    meta: [
      {
        name: 'description',
        content: `Build ${title}${owner ? ` par ${owner}` : ''} sur GW2 Builds.`
      },
      {
        property: 'og:title',
        content: `${title} · GW2 Builds`
      },
      {
        property: 'og:description',
        content: isPublic
          ? 'Build public Guild Wars 2.'
          : 'Build privé (propriétaire uniquement).'
      }
    ]
  })
})

const copyTemplate = async () => {
  if (!data.value?.build?.buildTemplate) return
  await navigator.clipboard.writeText(data.value.build.buildTemplate)
}
</script>

<template>
  <div class="space-y-6">
    <div v-if="pending">
      <p class="text-sm text-gray-400">Chargement…</p>
    </div>

    <div v-else-if="error">
      <p class="text-sm text-red-400">
        Impossible de charger ce build.
      </p>
    </div>

    <div v-else-if="!data?.build">
      <p class="text-sm text-gray-400">
        Build introuvable.
      </p>
    </div>

    <div v-else>
      <header class="flex items-start justify-between gap-4">
        <div>
          <h1 class="text-2xl font-semibold text-white">
            {{ data.build.title }}
          </h1>
          <p class="text-sm text-gray-400 mt-1">
            par
            <NuxtLink
              v-if="data.build.owner?.username"
              :to="`/u/${data.build.owner.username}`"
              class="text-red-400 hover:underline"
            >
              {{ data.build.owner.username }}
            </NuxtLink>
            <span v-else class="text-gray-500">Utilisateur supprimé</span>
          </p>
        </div>

        <UBadge
          :color="data.build.isPublic ? 'primary' : 'warning'"
          variant="soft"
        >
          {{ data.build.isPublic ? 'Public' : 'Privé' }}
        </UBadge>
      </header>

      <UCard class="bg-gray-900/50 border border-gray-800">
        <p class="text-xs text-gray-400 mb-3">
          Code d’archétype
        </p>
        <p class="font-mono text-sm break-all text-white">
          {{ data.build.buildTemplate }}
        </p>
        <UButton class="mt-4" size="xs" @click="copyTemplate">
          Copier le code
        </UButton>
      </UCard>

      <div v-if="data.build.buildEquipment" class="mt-4">
        <h2 class="text-sm font-semibold text-white mb-2">
          Équipement
        </h2>
        <pre class="text-xs text-gray-200 bg-black/30 p-3 rounded-lg overflow-auto">
{{ data.build.buildEquipment }}
        </pre>
      </div>
    </div>
  </div>
</template>
