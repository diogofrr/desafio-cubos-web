export const formatStringToNumber = (
  value: string | undefined | number
): number => {
  if (!value) return 0;

  let numericValue: number;

  if (typeof value === 'string') {
    // Remove all non-numeric characters except for decimal point
    const cleanedString = value.replace(/[^\d.]/g, '');
    numericValue = parseFloat(cleanedString) || 0;
  } else {
    numericValue = value;
  }

  // Ensure the value doesn't exceed PostgreSQL INT4 max value (2,147,483,647)
  return Math.min(numericValue, 2147483647);
};

// Format number to display as string with comma separators (e.g., 55,000)
export const formatNumberToDisplayString = (
  value: number | undefined | null
): string => {
  if (value === undefined || value === null) return '';
  return value.toLocaleString('en-US', { maximumFractionDigits: 0 });
};
