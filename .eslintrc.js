module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    //allow  console
    "no-console": "off",
    // allow async-await
    "vue/html-self-closing": "off",
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false
      }
    ],
    "no-undef": "off",
    "camelcase": "off"
  }
};
