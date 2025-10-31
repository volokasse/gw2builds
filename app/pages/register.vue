<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from '#app'

const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref<string | null>(null)

async function submit() {
  errorMsg.value = null

  // validation côté client (rapide, le serveur refait la vraie validation)
  if (username.value.trim().length < 3) {
    errorMsg.value = 'Le pseudo doit faire au moins 3 caractères.'
    return
  }
  if (password.value.length < 6) {
    errorMsg.value = 'Le mot de passe doit faire au moins 6 caractères.'
    return
  }

  loading.value = true
  try {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value
      }
    })

    // si pas d'erreur => cookie httpOnly posé, user connecté
    await navigateTo('/me')
  } catch (err: any) {
    // err.data?.statusMessage vient de createError coté serveur
    errorMsg.value = err?.data?.statusMessage || 'Inscription impossible.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-4">
    <UCard class="w-full max-w-sm">
      <template #header>
        <div class="text-center">
          <h1 class="text-lg font-semibold text-gray-100">Créer un compte</h1>
          <p class="text-gray-400 text-sm">Rejoins GW2 Builds</p>
        </div>
      </template>

      <UForm class="space-y-4" @submit.prevent="submit">
        <UFormGroup label="Nom d'utilisateur" required>
          <UInput
            v-model="username"
            placeholder="Ex: PowerReaperGod"
            :disabled="loading"
            icon="i-heroicons-user"
            size="lg"
          />
        </UFormGroup>

        <UFormGroup label="Mot de passe" required>
          <UInput
            v-model="password"
            type="password"
            placeholder="••••••••"
            :disabled="loading"
            icon="i-heroicons-lock-closed"
            size="lg"
          />
        </UFormGroup>

        <div v-if="errorMsg" class="text-red-400 text-sm">
          {{ errorMsg }}
        </div>

        <UButton
          type="submit"
          color="primary"
          size="lg"
          class="w-full justify-center"
          :loading="loading"
          label="Créer mon compte"
        />
      </UForm>

      <template #footer>
        <div class="text-center text-sm text-gray-400">
          <span>Déjà un compte ?</span>
          <NuxtLink to="/login" class="text-primary-400 hover:underline ml-1">
            Me connecter
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>
