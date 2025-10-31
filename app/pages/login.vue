<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from '#app'

const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref<string | null>(null)

async function submit() {
  errorMsg.value = null

  if (!username.value.trim() || !password.value) {
    errorMsg.value = 'Identifiants requis.'
    return
  }

  loading.value = true
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value
      }
    })

    // Cookie posé côté serveur si OK
    await navigateTo('/me')
  } catch (err: any) {
    errorMsg.value = err?.data?.statusMessage || 'Échec de connexion.'
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
          <h1 class="text-lg font-semibold text-gray-100">Connexion</h1>
          <p class="text-gray-400 text-sm">Heureux de te revoir</p>
        </div>
      </template>

      <UForm class="space-y-4" @submit.prevent="submit">
        <UFormGroup label="Nom d'utilisateur" required>
          <UInput
            v-model="username"
            placeholder="Ton pseudo"
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
          label="Se connecter"
        />
      </UForm>

      <template #footer>
        <div class="text-center text-sm text-gray-400">
          <span>Pas encore inscrit ?</span>
          <NuxtLink to="/register" class="text-primary-400 hover:underline ml-1">
            Créer un compte
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>
