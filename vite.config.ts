import { defineConfig } from "vite";
import { resolve } from "path";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  const baseURL = isProduction ? "URL_GOES_HERE_IF_FTP" : "/";

  return {
    base: baseURL,
    build: {
      outDir: "dist",
      emptyOutDir: true,
      assetsDir: "",
      cssCodeSplit: false,
      rollupOptions: {
        input: {
          main: "index.html",
        },
        output: {
          entryFileNames: "js/[name].js",
          chunkFileNames: "js/[name].js",
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith("css")) {
              return "css/CSS_NAME.css";
            }
            return "[name][extname]";
          },
        },
      },
    },
    plugins: [],
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ["last 2 versions", "ie >= 11"],
          }),
          // cssnano({
          //   preset: "default",
          // }),
        ],
      },
    },
  };
});
