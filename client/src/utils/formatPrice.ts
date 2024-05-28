export function formatPrice (price: { currency: string; amount: number; decimals: number }) {
  if (!price) return ''
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(
    price.amount,
  )
}

export function formatDecimals (decimals: number) {
  if (decimals === 0) return '00'
  if(decimals.toString().length === 1) return `${decimals}0`
    return decimals
}