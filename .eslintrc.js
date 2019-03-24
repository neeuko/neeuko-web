module.exports = {
  extends: "airbnb",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {
    "linebreak-style": 0,
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": 0,
    "template-tag-spacing": ["error", "never"]
  }
};
