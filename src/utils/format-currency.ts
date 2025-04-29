export function formatCurrency(value: string): string {
  if (!value) return '$0.00';

  const cleanValue = value.replace(/,/g, '');
  const numberValue = Number(cleanValue);

  if (isNaN(numberValue)) return '$0.00';

  const isNegative = numberValue < 0;
  const absoluteValue = Math.abs(numberValue);

  let formattedValue: string;

  if (absoluteValue >= 1000000000) {
    formattedValue = `$${(absoluteValue / 1000000000).toFixed(2)}B`;
  } else if (absoluteValue >= 1000000) {
    formattedValue = `$${(absoluteValue / 1000000).toFixed(2)}M`;
  } else if (absoluteValue >= 1000) {
    formattedValue = `$${(absoluteValue / 1000).toFixed(2)}K`;
  } else {
    formattedValue = `$${absoluteValue.toFixed(2)}`;
  }

  return isNegative ? `-${formattedValue}` : formattedValue;
}
