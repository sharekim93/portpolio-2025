import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@/*": resolve(__dirname, "app/*"),
    },
  },
  plugins: [reactRouter(), tailwindcss(), tsconfigPaths()],
});
