import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginPrettier from "eslint-plugin-prettier";

export default tseslint.config({
  ignores: ["dist"],
  files: ["**/*.{ts,tsx}"], // Разрешить файлы
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  languageOptions: {
    globals: {
      ...globals.browser, // Стандартные настройки
      __dirname: true, // Разрешить __dirname
      require: true, // Разрешить функцию require()
      // module: true,
    },
  },
  plugins: {
    prettier: pluginPrettier, // Добавление связи с Prettier
  },
  rules: {
    "prettier/prettier": "error", // Добавление связи с Prettier
  },
});
