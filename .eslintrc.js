module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', 'prettier'],
    rules: {
        // Enforce double quotes
        'quotes': ['error', 'double'],
        // Enforce semicolons
        'semi': ['error', 'always'],
        'prettier/prettier': [
            'error',
            {
                'singleQuote': false,
                'semi': true,
            },
        ],
    },
    overrides: [
        {
            // Configuration for Express (backend) files
            files: ['packages/backend/**/*'],
            rules: {
                'no-console': 'off',
            },
        },
        {
            // Configuration for Next.js (frontend) files
            files: ['packages/frontend/**/*'],
            rules: {},
        },
    ],
};
