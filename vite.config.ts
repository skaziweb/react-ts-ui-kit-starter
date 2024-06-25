import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import react from "@vitejs/plugin-react";

const entries = Object.fromEntries(
    glob
        .sync("src/components/**/*.{ts,tsx}")
        .map(file => [
          relative("src/components", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url))
        ])
);

const outputBase = {
  globals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react/jsx-runtime": "jsxRuntime",
    "classnames/bind": "cn",
    classnames: "classnames",
    "react-paginate": "react-paginate"
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  define: {
    "process.env": {}
  },
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    lib: {
      name: "uikit",
      entry: resolve(__dirname, "src/components/index.ts")
    },
    ssr: true,
    copyPublicDir: false,
    // https://vitejs.dev/config/build-options.html#build-rollupoptions
    rollupOptions: {
      external: ["react", "react-dom", "styled-components", "classnames"],
      input: entries,
      output: [
        {
          ...outputBase,
          exports: "named",
          format: "cjs",
          esModule: true
        },
        {
          ...outputBase,
          exports: "named",
          format: "esm",
          interop: "esModule"
        }
      ],
      plugins: []
    }
  }
});
