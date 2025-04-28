export function formatStringToNumber(value: string | undefined) {
  if (!value) return '0';
  const sanitizedValue = value.replace(/[^0-9.]/g, '');

  const numberValue = parseFloat(sanitizedValue);

  const formattedValue = numberValue.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedValue;
}
