<script setup lang="ts">
  import { ref } from 'vue';
  import { navigateTo } from '#app';

  const { refresh, loggedIn, loading } = useAuth();
  const username   = ref('');
  const password   = ref('');
  const submitting = ref(false);
  const errorMsg   = ref<string | null>(null);

  async function submit() {
    errorMsg.value = null;

    if (username.value.trim().length < 3) {
      errorMsg.value = 'Le pseudo doit faire au moins 3 caractères.';
      return;
    }
    if (password.value.length < 6) {
      errorMsg.value = 'Le mot de passe doit faire au moins 6 caractères.';
      return;
    }

    submitting.value = true
    try {
      await $fetch('/api/auth/register', {
        method: 'POST',
        body: {
          username: username.value,
          password: password.value
        }
      });

      await refresh();
      await navigateTo('/me');
    }
    catch (err: any) {
      errorMsg.value = err?.data?.statusMessage || 'Inscription impossible.';
    }
    finally {
      submitting.value = false;
    }
  }
</script>

<template>
  <div v-if="!loading && !loggedIn" class="bg-gray-950 text-gray-100 flex items-center justify-center p-4">
    <UCard class="w-full max-w-sm bg-gray-900/70" :ui="{ root: 'ring-gray-800', header: 'border-gray-800'}">
      <template #header>
        <div class="text-center">
          <h1 class="text-lg font-semibold text-gray-100">Créer un compte</h1>
          <p class="text-gray-400 text-sm">Rejoins GW2 Builds</p>
        </div>
      </template>

      <UForm class="space-y-4 sm:px-10" @submit.prevent="submit">
        <UFormField label="Nom d'utilisateur" :ui="{ label: 'text-gray-400' }" required>
          <UInput
            v-model="username"
            placeholder="Ex: PowerReaperGod"
            :disabled="submitting"
            icon="i-heroicons-user"
            size="lg"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Mot de passe" :ui="{ label: 'text-gray-400' }" required>
          <UInput
            v-model="password"
            type="password"
            placeholder="••••••••"
            :disabled="submitting"
            icon="i-heroicons-lock-closed"
            size="lg"
            class="w-full"
          />
        </UFormField>

        <div v-if="errorMsg" class="text-red-400 text-sm">
          {{ errorMsg }}
        </div>

        <UButton
          type="submit"
          color="secondary"
          size="lg"
          class="w-full justify-center"
          :loading="submitting"
          label="Créer mon compte"
        />
      </UForm>
    </UCard>
  </div>
</template>
