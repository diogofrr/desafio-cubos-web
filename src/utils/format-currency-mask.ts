export const formatCurrencyMask = (
  value: string | number | undefined | null
): string => {
  if (value === undefined || value === null || value === '') return '';

  // Convert to string and remove all non-numeric characters
  const numericValue =
    typeof value === 'string'
      ? value.replace(/\D/g, '')
      : String(value).replace(/\D/g, '');

  // If empty after cleaning, return empty string
  if (!numericValue) return '';

  // Convert to number
  const number = parseInt(numericValue, 10);

  // Format with thousand separators
  return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
};

// Convert currency string back to number for submission
export const parseCurrencyToNumber = (value: string | undefined): number => {
  if (!value) return 0;
  // Remove all non-numeric characters
  const numericValue = value.replace(/\D/g, '');
  const result = parseInt(numericValue, 10) || 0;
  // Ensure the value doesn't exceed PostgreSQL INT4 max value
  return Math.min(result, 2147483647);
};
