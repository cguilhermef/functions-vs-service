/**
 * @GOAT-SACRIFICE: estas functions existem por conta da formatação de data feita na APi,
 * que um dia, espera-se, será removida. E a API passará a entregar somente o formato ISO8601;
 */
export function iso8601ToString(raw: string, locale: string): string {
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

  let dateF = '';
  const [date, time] = raw.split('T');
  const [hours, minutes] = time.split(':');
  const [year, month, day] = date.split('-');
  if (locale === 'en-US') {
    dateF = `${month}/${day}/${year}`;
    return time ? `${dateF} ${hours}:${minutes}` : dateF;
  }
  dateF = `${day}/${month}/${year}`;
  return time ? `${dateF} ${hours}:${minutes}` : dateF;
}
