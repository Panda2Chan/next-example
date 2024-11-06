import antfu from '@antfu/eslint-config'

export default antfu({
  // Or customize the stylistic rules
  rules: {
    'indent': 'off',
    'style/no-tabs': 'off',
    'no-console': 'off',
    'unused-imports/no-unused-vars': 'off',
    'ts/no-require-imports': 'off',
  },
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  jsonc: false,
})
