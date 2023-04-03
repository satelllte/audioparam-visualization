export const isBrowser = () => {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
