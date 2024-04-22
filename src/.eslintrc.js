module.exports = {
    extends: ['plugin:vue/vue3-essential', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
    },
}
