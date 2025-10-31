<script setup lang="ts">
// TODO 5.2 POST /api/builds/create
const title = ref('')
const profession = ref('')
const role = ref('')
const code = ref('') // le code [&....==]
const isPublic = ref(true)
</script>

<template>
  <section class="max-w-xl mx-auto p-6 space-y-6">
    <header>
      <h1 class="text-xl font-semibold text-text">Nouveau build</h1>
      <p class="text-text-dim text-sm">Décris ton build GW2 et rends-le public ou privé.</p>
    </header>

    <form class="space-y-4 bg-surface-light/50 border border-white/5 rounded-xl p-4">
      <div class="space-y-2">
        <label class="text-sm text-text-dim">Titre du build</label>
        <input
          v-model="title"
          class="w-full rounded-xl bg-surface-light text-text border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent-red"
        />
      </div>

      <div class="space-y-2">
        <label class="text-sm text-text-dim">Profession</label>
        <input
          v-model="profession"
          placeholder="Necro / Revenant / etc."
          class="w-full rounded-xl bg-surface-light text-text border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent-red"
        />
      </div>

      <div class="space-y-2">
        <label class="text-sm text-text-dim">Rôle</label>
        <input
          v-model="role"
          placeholder="Condi DPS / Heal / etc."
          class="w-full rounded-xl bg-surface-light text-text border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent-red"
        />
      </div>

      <div class="space-y-2">
        <label class="text-sm text-text-dim">Code du build GW2</label>
        <textarea
          v-model="code"
          rows="3"
          class="w-full rounded-xl bg-surface-light text-text border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent-red"
          placeholder="[&DQgnNTI1TC+HHYcdQAGBAIEAQAF3AVUdfR19HQAAAAAAAAAAAAAAAAAAAAADMgAFAGcAAA==]"
        />
      </div>

      <div class="flex items-center justify-between text-sm">
        <span class="text-text-dim">Public</span>
        <input
          type="checkbox"
          v-model="isPublic"
          class="rounded border-white/10 bg-surface-light"
        />
      </div>

      <button
        type="submit"
        class="w-full rounded-xl bg-accent-red text-white font-medium text-sm py-2 hover:opacity-90 transition"
      >
        Sauvegarder le build
      </button>
    </form>
  </section>
</template>
