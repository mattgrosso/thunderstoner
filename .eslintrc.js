module.exports = {
  parser: "babel-eslint",
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    // 'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "no-console": "off",
    "no-unused-vars": "warn",
    "no-debugger": "off"
  }
}
