module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    extends: ["airbnb", "prettier", "plugin:@typescript-eslint/recommended"],
    rules: {
        "prettier/prettier": ["error"],
        indent: ["error", "tab"],
        quotes: ["error", "double"],
    },
};
