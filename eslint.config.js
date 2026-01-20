import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '**/*.d.ts',
      'package-lock.json',
      'example/**',
      'docs/**',
      '.vitepress/**',
      '**/*.min.js',
      'build/**',
      '.nuxt/**',
      'coverage/**'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
]
