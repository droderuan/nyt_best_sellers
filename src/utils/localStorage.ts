const BASE_STORAGE = "ny-times-best-sellers";

export function getStorageItem(key: string) {
  return localStorage.getItem(`${BASE_STORAGE}:${key}`)
}
export function setStorageItem(key: string, value: string) {
  return localStorage.setItem(`${BASE_STORAGE}:${key}`, value)
}
