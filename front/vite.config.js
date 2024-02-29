import * as path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), svgr()],
    build: {
      sourcemap: false,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
