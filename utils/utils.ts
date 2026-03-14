export function isValidJsonString(value: string): boolean {
  if (typeof value !== 'string' || value.trim() === '')
    return false;

  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}
