import { expect } from "vitest";
import { test } from "vitest";
import { describe } from "vitest";
import { filterEven } from "../array-utils";

describe('Filtrar por numeros pares', () => {
  test('Deve retornar apenas numeros pares', () => {
    const input = [1,2,3,4,5,6,7,8];
    
    const result = filterEven(input);

    expect(result).toEqual([2, 4, 6, 8]);
    expect(result).toHaveLength(4)

  })
})
