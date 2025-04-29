export const formatStringToNumber = (value: string | undefined): number => {
  if (!value) return 0;

  const numericValue = value.replace(/[\D]/g, '');

  return parseFloat(numericValue);
};
