export function formatPrice(price: number, currency_id: string) {
  const [amount, decimals] = price.toString().split('.')
  return {
    currency: currency_id,
    amount: parseInt(amount),
    decimals: decimals ? parseInt(decimals) : 0
  }
}