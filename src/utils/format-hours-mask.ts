export function convertTimeToMinutes(timeString: string): number {
  if (!timeString) return 0;

  if (!isNaN(Number(timeString))) {
    return Number(timeString);
  }

  const [hours, minutes] = timeString
    .split(':')
    .map((part) => parseInt(part, 10));

  if (isNaN(hours) || isNaN(minutes)) {
    return 0;
  }

  return hours * 60 + minutes;
}

export function convertMinutesToTimeString(minutes: number): string {
  if (!minutes && minutes !== 0) return '';

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}
