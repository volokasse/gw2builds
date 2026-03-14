<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'

const props = defineProps<{
  specializations: Array<{ id: number; traits: number[] }>,
  direction?:string
}>()

// prêt = le script armory-embeds est chargé
const ready = ref(false)
// utilisé pour forcer Nuxt/Vue à recréer le bloc complet
const renderKey = ref(0)
// ref vers le conteneur
const container = ref<HTMLElement | null>(null)

// petit helper : on tente de faire retravailler la lib
function forceProcess() {
  // certaines versions n’exposent rien => on tente quand même
  // en dernier recours, on réinjecte le script pour forcer un nouveau scan
  if (!(window as any).armoryEmbeds && !(window as any).ArmoryEmbeds && !(window as any).armory) {
    const src = 'https://unpkg.com/armory-embeds@0.4.3/armory-embeds.js'
    const s = document.createElement('script')
    s.src = src + '?t=' + Date.now()
    s.async = true
    document.head.appendChild(s)
    return
  }

  // si un global finit par exister, on pourra l’appeler ici
  // (certaines variantes exposent .process ou .render)
  const g = (window as any).armoryEmbeds || (window as any).ArmoryEmbeds || (window as any).armory
  if (g && typeof g.process === 'function') {
    g.process(container.value || document.body)
  }
}

onMounted(() => {
  // si déjà chargé (rechargement client), on passe direct en ready
  const handler = () => {
    ready.value = true
    // premier passage de la lib
    nextTick(() => forceProcess())
  }

  if (typeof window !== 'undefined') {
    if (document.querySelector('script[data-armory-embeds]')) {
      // le script est là, on considère que c’est bon
      handler()
    } else {
      window.addEventListener('armory-embeds:ready', handler, { once: true })
    }
  }
})

// quand la liste de spé change -> on recrée le bloc + on reforce le process
watch(
  () => props.specializations,
  async () => {
    if (!ready.value) return
    renderKey.value++
    await nextTick()
    forceProcess()
  }
)
</script>

<template>
  <!-- on ne rend rien tant que la lib n’est pas chargée -->
  <div v-if="ready" ref="container" class="w-full gap-2" :class="direction === undefined ? '' : 'column'">
    <div class="max-h-65.5 md:max-h-21 w-full flex flex-col md:flex-row gap-2 items-center justify-center transform-[scale(.6)]">
      <div
        v-for="(spec, idx) in specializations"
        :key="spec.id || idx"
        data-armory-embed="specializations"
        :data-armory-ids="spec.id"
        v-bind="spec.traits && spec.traits.length
          ? { ['data-armory-' + spec.id + '-traits']: spec.traits.join(',') }
          : {}"
        class="w-125 shrink-0"
      ></div>
    </div>
  </div>
  <div v-else class="text-xs text-gray-500">
    Chargement des spécialisations…
  </div>
</template>

<style lang="scss" scoped>
  .gw2-spec-list .armory-embed {
    max-width: 100%;
  }
  .column
  {
    position: relative;
    top: -17px;
    height: 260px;

    & > div
    {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
</style>
