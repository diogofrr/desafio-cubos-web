export function formatReducedNumber(value: string): string {
  const cleanValue = value.replace(/,/g, '');
  const numberValue = Number(cleanValue);

  if (isNaN(numberValue)) {
    return value;
  }

  if (numberValue >= 1000000000) {
    return `${(numberValue / 1000000000).toFixed(1).replace(/\.0$/, '')}B`;
  }

  if (numberValue >= 1000000) {
    return `${(numberValue / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
  }

  if (numberValue >= 1000) {
    return `${(numberValue / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  }

  return `${numberValue}`;
}
