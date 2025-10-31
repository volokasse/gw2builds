export default defineNuxtRouteMiddleware(async (to) => {
  const protectedRoutes = ['/me', '/new-build']

  if (!protectedRoutes.includes(to.path)) {
    return
  }

  const { data, error } = await useFetch('/api/auth/me', {
    method: 'GET',
    credentials: 'include'
  })

  // Pas de session -> on redirige côté client
  if (error.value || !data.value?.user) {
    return navigateTo('/login')
  }
})
