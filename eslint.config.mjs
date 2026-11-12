import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",   // require/module.exports 사용
      globals: globals.node,    // console, process 등 Node 전역 허용
    },
  },
];