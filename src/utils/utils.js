export const moneyFormat = new Intl.NumberFormat("es-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});