/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom',  // toto je kľúčové, aby mal Vitest k dispozícii document a window
  },
})
