/**
 * @GOAT-SACRIFICE: estas functions existem por conta da formatação de data feita na APi,
 * que um dia, espera-se, será removida. E a API passará a entregar somente o formato ISO8601;
 */
const formatToISO = (
  year: string,
  month: string,
  day: string,
  hours: string, // eslint-disable-line @typescript-eslint/no-unused-vars
  minutes: string // eslint-disable-line @typescript-eslint/no-unused-vars
): string => {
  return `${year}-${month}-${day}`;
};

export function iso8601FromString(raw: string, locale: string): string {
  /**
   * Trecho de código usado pelo backend
   * case 'en':
   * return 'm/d/Y H:i' . ($withSeconds ? ':s' : '');
   * case 'br':
   * case 'pt':
   * case 'es':
   * default:
   * return 'd/m/Y H:i' . ($withSeconds ? ':s' : '');
   */

  let day = '';
  let month = '';
  let year = '';
  const [date, time] = raw.split(' ');
  const [hours, minutes] = (time || '').split(':');
  if (locale === 'en-US') {
    [month, day, year] = date.split('/');
    return formatToISO(year, month, day, hours, minutes);
  }
  [day, month, year] = date.split('/');
  return formatToISO(year, month, day, hours, minutes);
}
