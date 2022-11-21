alert('O arquivo use-external-pure-functions-again foi importado!');

import {
  rest,
  sum,
  divide,
} from '@function-vs-service/shared/interfaces/util-general';

export function getRestAndSumAndDivide(value1: number, value2: number): number {
  const result = divide(rest(value1, value2), sum(value1, value2));
  return result;
}
