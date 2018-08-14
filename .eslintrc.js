module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // allow async-await

    //配置缩进为4个空格
    'indent':[2,4],

    // 允许 iView 的自定义 Close Tag
    'vue/no-parsing-error': [2, {
        "x-invalid-end-tag": false
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
