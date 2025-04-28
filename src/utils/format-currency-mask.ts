export const formatCurrencyMask = (value: string | number): string => {
  if (!value) return '$0.00';

  const numericValue =
    typeof value === 'string' ? value.replace(/\D/g, '') : value.toString();

  const amount = Number(numericValue) / 100;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
