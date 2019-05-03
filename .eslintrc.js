module.exports =  {
  "extends": [
    "plugin:vue/essential",
    "plugin:prettier/recommended"
  ],
  "env": {
    "jest": true,
    "node": true,
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "rules": {
    "prettier/prettier": "error",
    "camelcase": 0,
		"array-bracket-spacing": 2
  },
  "plugins": [
    "vue",
    "prettier"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "parser": "babel-eslint"
  }
};

