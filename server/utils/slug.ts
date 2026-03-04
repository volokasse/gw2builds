import { randomBytes } from 'node:crypto'
import { prisma } from '@/server/utils/db'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export function randomSlug(length = 5): string {
  const bytes = randomBytes(length);
  let out     = '';
  for (let i = 0; i < length; i++)
    out += ALPHABET[bytes[i] % ALPHABET.length];
  return out;
}

export async function createUniqueBuildSlug(length = 5, maxTries = 30): Promise<string> {
  for (let i = 0; i < maxTries; i++) {
    const slug   = randomSlug(length);
    const exists = await prisma.build.findUnique({ where: { slug } });

    if (!exists)
        return slug;
  }
  throw new Error('Unable to allocate unique slug after several attempts.');
}
