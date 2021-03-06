module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  plugins: ['react', 'import', 'json', 'prettier', 'react-hooks'],
  rules: {
    'react/forbid-prop-types': ['warn'],
    'jsx-a11y/role-supports-aria-props': ['warn'],
    'jsx-a11y/no-static-element-interactions': ['warn'],
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/test-utils/*.js',
          '**/*-test.js',
          '**/*.spec.js',
          'src/stubs/graphql/mock-server.js',
          'src/server/debug/*',
          'src/**/*.stories.js',
          '**/webpack.config.js',
        ],
        optionalDependencies: false,
      },
    ],
    // label-has-for is deprecated and buggy:
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 0,
    'mocha/no-exclusive-tests': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Avoid importing all of lodash. Import individual functions instead.',
          },
        ],
      },
    ],
    'no-underscore-dangle': [2, { allow: ['__ResetDependency__', '__Rewire__'] }],
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  globals: {
    __AEM__: false,
    __AEM_SPA__: false,
    __GIT_HASH_LONG__: false,
    __GIT_HASH_SHORT__: false,
    __rewire_reset_all__: false,
    __SERVER__: false,
  },
  overrides: [
    {
      files: ['src/utils/logging/**'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['src/**/*-test.js', 'src/**/*.spec.js'],
      rules: {
        'no-unused-expressions': 0,
        'react/prop-types': 0,
      },
    },
    {
      files: ['src/**/*.stories.js'],
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: require('./.eslint-reduced-rule-file-list.json'),
      rules: {
        'array-callback-return': 0,
        'arrow-body-style': 0,
        'class-methods-use-this': 0,
        'consistent-return': 0,
        'global-require': 0,
        'import/extensions': 0,
        'import/first': 0,
        'import/named': 0,
        'import/newline-after-import': 0,
        'import/no-duplicates': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'import/no-unresolved': 0,
        'import/no-useless-path-segments': 0,
        'import/order': 0,
        'jsx-a11y/alt-text': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-autofocus': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
        'jsx-a11y/no-noninteractive-tabindex': 0,
        'jsx-a11y/no-redundant-roles': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'lines-between-class-members': 0,
        'no-case-declarations': 0,
        'no-console': 0,
        'no-else-return': 0,
        'no-extra-boolean-cast': 0,
        'no-fallthrough': 0,
        'no-lonely-if': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-prototype-builtins': 0,
        'no-restricted-globals': 0,
        'no-restricted-syntax': 0,
        'no-return-assign': 0,
        'no-template-curly-in-string': 0,
        'no-undef-init': 0,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 0,
        'no-unreachable': 0,
        'no-useless-computed-key': 0,
        'no-useless-constructor': 0,
        'no-useless-escape': 0,
        'object-shorthand': 0,
        'operator-assignment': 0,
        'prefer-const': 0,
        'prefer-destructuring': 0,
        'prefer-promise-reject-errors': 0,
        'prefer-template': 0,
        'react/button-has-type': 0,
        'react/default-props-match-prop-types': 0,
        'react/destructuring-assignment': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-curly-brace-presence': 0,
        'react/no-access-state-in-setstate': 0,
        'react/no-array-index-key': 0,
        'react/no-children-prop': 0,
        'react/no-danger': 0,
        'react/no-string-refs': 0,
        'react/no-unescaped-entities': 0,
        'react/no-unused-prop-types': 0,
        'react/no-unused-state': 0,
        'react/prefer-stateless-function': 0,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/sort-comp': 0,
        'spaced-comment': 0,
      },
    },
    {
      files: '**/*.js',
      rules: {
        'import/prefer-default-export': 0,
      },
    },
    {
      files: 'src/api/definitions/**/*.js',
      rules: {
        'no-template-curly-in-string': 0, // temporary until we implement api endpoints to use template literals
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: 'deploy/webpack.config.js',
      },
    },
  },
};
