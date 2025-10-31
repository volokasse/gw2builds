import { getCurrentUser } from '@/server/utils/session'

export default defineEventHandler(async (event) => {
  const user = await getCurrentUser(event)

  return {
    ok: true,
    user // soit { id, username, createdAt } soit null
  }
})
