export const formatCurrencyMask = (
  value: string | number | undefined | null
): string => {
  if (value === undefined || value === null || value === '') return '';

  const numericValue =
    typeof value === 'string'
      ? value.replace(/\D/g, '')
      : String(value).replace(/\D/g, '');

  if (!numericValue) return '';

  const number = parseInt(numericValue, 10);

  return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
};
