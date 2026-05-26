module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  plugins: ['react'],
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'react/react-in-jsx-scope': 'off'
  }
}