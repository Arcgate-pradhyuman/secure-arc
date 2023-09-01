module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended', // Corrected the plugin path
    'plugin:prettier/recommended',  // Prettier recommended configuration
  ],
  plugins: [
    'react',
    'react-hooks',
    '@next/next', // Corrected the plugin path
    'prettier'  // Prettier plugin
  ],
  rules: {
    'react/jsx-no-undef': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    quotes: ['error', 'single'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error'  // Use Prettier for formatting
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
