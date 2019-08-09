module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    strict: 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: '../webpack.config.js',
      }
    }
  },
};
