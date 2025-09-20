import { test } from "vitest";
import { describe } from "vitest";
import { isValidEmail } from "../validator";
import { expect } from "vitest";

describe('Validação de email', () => {
  test('Deve validar email correto', () => {
    const result = isValidEmail('teste@email.com');

    expect(result).toBeTruthy(result)
  })

  test('Deve validar email incorreto', () => {
    const result = isValidEmail('teste@email');
    expect(result).toBeFalsy(result);
  })
})
