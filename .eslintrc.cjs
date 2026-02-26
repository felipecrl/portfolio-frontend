module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "react-refresh", "@typescript-eslint"],
  settings: { react: { version: "detect" } },
  ignorePatterns: ["dist", "node_modules"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": "off"
  }
};
