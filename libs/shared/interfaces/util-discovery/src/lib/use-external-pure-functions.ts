alert('O arquivo use-external-pure-functions foi importado!');

import {
  rest,
  sum,
  divide,
} from '@function-vs-service/shared/interfaces/util-general';

export function getRest(value1: number, value2: number): number {
  const result = rest(value1, value2);
  return result;
}

export function getSum(value1: number, value2: number): number {
  const result = sum(value1, value2);
  return result;
}

export function getDivide(value1: number, value2: number): number {
  const result = divide(value1, value2);
  return result;
}
