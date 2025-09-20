export function sum(a, b) {
  return a + b;
}

export function division(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida')
  }
  return a / b
}
