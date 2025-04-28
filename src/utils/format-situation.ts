export function formatSituation(situation: string): string {
  switch (situation) {
    case 'PENDING':
      return 'Em breve';
    case 'RELEASED':
      return 'Lançado';
    case 'CANCELLED':
    default:
      return 'Cancelado';
  }
}
