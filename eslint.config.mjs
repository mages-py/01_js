// Этот конфиг не работает
// import js from "@eslint/js";
// import globals from "globals";
// import { defineConfig } from "eslint/config";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
// ]);
import js from '@eslint/js';
import globals from 'globals';

export default [
  // Базовые рекомендуемые правила от ESLint
  js.configs.recommended,

  {
    // Файлы, к которым применяется эта конфигурация
    files: ['**/*.{js,mjs,cjs}'],

    // Глобальные переменные (браузер + Node.js)
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    // Можно добавить/переопределить правила
    rules: {
      semi: ['error', 'never'],
      'no-console': ['warn'],
    },
  },
];