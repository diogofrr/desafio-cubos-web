export function formatCurrency(value: string): string {
  const numberValue = Number(value);

  if (numberValue >= 1000000000) {
    return `$${(numberValue / 1000000000).toFixed(2)}B`;
  }

  if (numberValue >= 1000000) {
    return `$${(numberValue / 1000000).toFixed(2)}M`;
  }

  if (numberValue >= 1000) {
    return `$${(numberValue / 1000).toFixed(2)}K`;
  }

  return `$${numberValue.toFixed(2)}`;
}
