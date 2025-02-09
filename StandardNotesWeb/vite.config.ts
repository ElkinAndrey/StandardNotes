import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()], // Добавление реакт
  server: {
    port: 3000, // Порт тестового сервера
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"), // Добавление алиасов
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `js/[hash].js`, // Изменить имена основных JS-файлов
        chunkFileNames: `js/[hash].js`, // Изменить имена chunk-файлов
        assetFileNames: (assetInfo) => {
          const extname: string = (assetInfo.names[0] ?? "").split(".").pop() ?? "";
          if (["woff", "woff2", "ttf", "eot", "otf"].includes(extname)) {
            return "fonts/[name][extname]"; // При сборке переместить все шрифты в папку fonts
          }
          if (["css"].includes(extname)) {
            return "css/[hash][extname]"; // При сборке переместить все стили в папку css
          }
          if (["svg", "png", "jpg"].includes(extname)) {
            return "images/[name][extname]"; // При сборке переместить все картинки в папку images
          }
          if (["pdf"].includes(extname)) {
            return "pdf/[name][extname]"; // При сборке переместить все pdf в папку pdf
          }
          return "assets/[name]-[hash][extname]"; // Остальные asset-файлы
        },
      },
    },
  },
});
