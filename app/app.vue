<script setup lang="ts">
const links = [
  { to: '/', label: 'Accueil' },
  { to: '/me', label: 'Mes builds' },
  { to: '/new-build', label: 'Nouveau' },
  { to: '/login', label: 'Connexion' }
];

async function logout()
{
  await $fetch('/api/auth/logout', {
    'method': 'POST',
    'credentials': 'include'
  });
  navigateTo('/login');
}
</script>

<template>
  <UApp>
    <div class="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <!-- Header -->
      <header class="border-b border-gray-800 bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-gray-900/40">
        <UContainer class="py-3 flex items-center justify-between gap-4 text-sm">
          <div class="font-semibold tracking-wide text-white">
            GW2 Builds
          </div>

          <nav class="flex items-center gap-4 text-gray-400">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="hover:text-white transition"
            >
              {{ link.label }}
            </NuxtLink>
            <UButton @click="logout">
              Logout
            </UButton>
          </nav>
        </UContainer>
      </header>

      <!-- Page content -->
      <main class="flex-1 py-8">
        <UContainer>
          <NuxtPage />
        </UContainer>
      </main>

      <!-- Footer -->
      <footer class="border-t border-gray-800 text-center text-[11px] text-gray-500 py-4">
        <p>GW2 Builds — prototype</p>
        <p class="opacity-60">Stocke, partage et explore des builds Guild Wars 2.</p>
      </footer>
    </div>
  </UApp>
</template>
