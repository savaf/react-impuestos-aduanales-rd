export const percentFormat = (num: number = 0) =>
  new Intl.NumberFormat("es", { style: "percent" }).format(num);

const financialFormat = (num: number, currency : string = 'DOP') =>
  new Intl.NumberFormat("es", { style: "currency", currency, maximumSignificantDigits: 2 }).format(num);
