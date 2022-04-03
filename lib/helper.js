export const currency = (amount) => {
  return amount.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})
}

export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}