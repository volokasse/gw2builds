// app/composables/useAuth.ts
import { useRequestEvent, callOnce } from '#app'
import { onMounted } from 'vue';

type AuthUser = {
  id: number
  username: string
}

type AuthResponse = {
  user?: {
    id: number
    username: string
  }
}

export function useAuth() {
  // 1) état partagé
  const user = useState<AuthUser | null>('auth:user', () => null)
  // très important : on démarre à true
  const loading = useState<boolean>('auth:loading', () => true)

  const fetchMe = async (opts: { event?: ReturnType<typeof useRequestEvent> } = {}) => {
    // si déjà en cours, on laisse finir
    if (loading.value) {
      // on ne return pas forcément, on peut vouloir relancer, mais on reste simple
    }
    loading.value = true

    try {
      const headers: Record<string, string> = {}

      // SSR : on forward le cookie
      if (opts.event) {
        const cookie = opts.event.node?.req?.headers?.cookie
        if (cookie) {
          headers.cookie = cookie
        }
      }

      const res = await $fetch<AuthResponse>('/api/auth/me', {
        method: 'GET',
        credentials: 'include',
        headers
      })

      if (res?.user) {
        user.value = {
          id: res.user.id,
          username: res.user.username
        }
      } else {
        user.value = null
      }
    } catch {
      user.value = null
    } finally {
      loading.value = false
    }
  }

  // 2) SSR
  const event = useRequestEvent()
  if (event) {
    // on s’assure que sur un rendu SSR on ne le fait qu’une fois
    callOnce('auth:ssr-init', () => fetchMe({ event }))
  }

  // 3) Client
  onMounted(() => {
    // si on vient par navigation client et qu'on est encore en attente
    if (!event && loading.value) {
      void fetchMe()
    }
  })

  const loggedIn = computed(() => !!user.value)

  return {
    user,
    loggedIn,
    loading,
    refresh: fetchMe
  }
}
