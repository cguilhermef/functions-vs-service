alert('O arquivo iso8601 foi importado!');
class Iso8601Singleton {
  private static instance: Iso8601Singleton;

  public static getInstance(): Iso8601Singleton {
    if (!Iso8601Singleton.instance) {
      Iso8601Singleton.instance = new Iso8601Singleton();
      alert('Nova instância de Iso8601Singleton foi criada!');
    }

    return Iso8601Singleton.instance;
  }

  public formatToISO(
    year: string,
    month: string,
    day: string,
    hours: string, // eslint-disable-line @typescript-eslint/no-unused-vars
    minutes: string // eslint-disable-line @typescript-eslint/no-unused-vars
  ): string {
    return `${year}-${month}-${day}`;
  }

  public iso8601FromString(raw: string, locale: string): string {
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
      return this.formatToISO(year, month, day, hours, minutes);
    }
    [day, month, year] = date.split('/');
    return this.formatToISO(year, month, day, hours, minutes);
  }

  public iso8601ToString(raw: string, locale: string): string {
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
}

const { formatToISO, iso8601FromString, iso8601ToString } =
  Iso8601Singleton.getInstance();
export { formatToISO, iso8601FromString, iso8601ToString };
