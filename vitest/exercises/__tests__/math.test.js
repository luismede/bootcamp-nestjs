import { expect } from "vitest";
import { describe, test } from "vitest";
import { division, sum } from "../math";

describe('Função de Soma', () => {
  test('Deve somar dois números positivos', () => {
    const a = 2;
    const b = 1;

    expect(sum(a,b)).toBe(3);
  })
})

describe('Função de divisão', () => {

  test('Deve dividir os números nnormalmente', () =>{
    const result = division(2, 4);
    expect(result).toBe(0.5);
  })
  test('Deve lançar um erro ao dividir por zero', () => {
    expect(() => {
       division(2, 0)
    }).throw('Divisão por zero não é permitida')
  })
})

