import { expect } from "vitest";
import { test } from "vitest";
import { sum } from "./sum";

// test('nome do teste', funcao de callback)
test('test sum 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3) // Checa se o valor recebido é o mesmo que foi passado como esperado, nesse caso, 3.
});
