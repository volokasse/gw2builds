import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { H3Event, setCookie, deleteCookie, getCookie } from 'h3'
import { useRuntimeConfig } from '#imports' // ← il manquait
import { prisma } from './db'

const COOKIE_NAME = 'gw2_session'
const COOKIE_MAX_AGE_SEC = 60 * 60 * 24 * 7 // 7 jours

// Récupère le secret de signature depuis runtimeConfig (nuxt.config.ts -> runtimeConfig.sessionSecret)
function getSessionSecret() {
  const config = useRuntimeConfig()
  if (!config.sessionSecret) {
    throw new Error('Missing sessionSecret in runtime config')
  }
  return config.sessionSecret as string
}

// Hash du mot de passe en base
export async function hashPassword(plain: string) {
  const saltRounds = 10
  return bcrypt.hash(plain, saltRounds)
}

// Compare le mot de passe fourni avec le hash stocké
export async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash)
}

// Crée un token signé qui contient juste l'id utilisateur
function createSessionToken(userId: number) {
  return jwt.sign(
    { uid: userId },
    getSessionSecret(),
    {
      algorithm: 'HS256',
      expiresIn: COOKIE_MAX_AGE_SEC // secondes
    }
  )
}

// Vérifie/parse le token venant du cookie, renvoie l'id utilisateur ou null
function verifySessionToken(token: string | undefined | null): number | null {
  if (!token) return null
  try {
    const payload = jwt.verify(token, getSessionSecret()) as { uid: number }
    return payload.uid
  } catch {
    return null
  }
}

// Définit le cookie httpOnly sécurisé
export function setSessionCookie(event: H3Event, userId: number) {
  const token = createSessionToken(userId)

  setCookie(event, COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // en prod: true, en dev local http: false
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE_SEC
  })
}

// Supprime le cookie (logout futur)
export function clearSessionCookie(event: H3Event) {
  deleteCookie(event, COOKIE_NAME, { path: '/' })
}

// Utilitaire: retourne l'utilisateur courant (ou null)
// -> lit le cookie, vérifie le token, fetch le user en DB
export async function getCurrentUser(event: H3Event) {
  const token = getCookie(event, COOKIE_NAME)
  const userId = verifySessionToken(token)

  if (!userId) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      username: true,
      createdAt: true
    }
  })

  return user ?? null
}

// alias utilisé dans certaines routes
export async function getSessionUser(event: H3Event) {
  return getCurrentUser(event)
}
