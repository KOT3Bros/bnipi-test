export function clearEmptyParams<K>(params?: K): { [k: string]: unknown } {
  let requestParams = {}
  if (params)
    requestParams = params

  return Object.fromEntries(
    Object.entries(requestParams)
      .filter(([_, value]) => !!value || typeof value === 'boolean'),
  )
}
