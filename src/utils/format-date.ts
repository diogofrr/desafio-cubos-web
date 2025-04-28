export function formatDate(dateString: string): string {
  if (!dateString) return '--/--/----';

  const date = new Date(dateString);

  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(date);
}
