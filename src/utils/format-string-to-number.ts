export const formatStringToNumber = (value: string | undefined): number => {
  if (!value) return 0;

  console.log(value);

  const numericValue = value.replace(/[\D]/g, '');

  return parseFloat(numericValue);
};
