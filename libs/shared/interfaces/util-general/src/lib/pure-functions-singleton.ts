alert('O arquivo pure-functions-singleton foi importado!');
class PureFunctionsSingleton {
  private static instance: PureFunctionsSingleton;
  public static getInstance(): PureFunctionsSingleton {
    if (!PureFunctionsSingleton.instance) {
      PureFunctionsSingleton.instance = new PureFunctionsSingleton();
      alert('Nova instância de PureFunctionsSingleton foi criada!');
    }
    return PureFunctionsSingleton.instance;
  }
  public rest(value1: number, value2: number): number {
    return value1 % value2;
  }
  public sum(value1: number, value2: number): number {
    return value1 + value2;
  }
  public divide(value1: number, value2: number): number {
    return value1 / value2;
  }
}
const { rest, sum, divide } = PureFunctionsSingleton.getInstance();
export { rest, sum, divide };
