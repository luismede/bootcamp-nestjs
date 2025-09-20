import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // Permite usar describe/it sem imports
    environment: 'node' // define o ambiente de testes
  }
})
