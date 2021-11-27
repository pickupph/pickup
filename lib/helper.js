export const currency = (amount) => {
  return amount.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})
}