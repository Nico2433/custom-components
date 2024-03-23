import react from "@vitejs/plugin-react-swc";
import { readdirSync, statSync } from "fs";
import path from "path";
import generatePackageJson from "rollup-plugin-generate-package-json";
import tailwindcss from "tailwindcss";
import { fileURLToPath } from "url";
import type { LibraryOptions } from "vite";
import { build } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";

const excludeFolders = ["stories"];

const getFolders = (directory: string) => {
  const items = readdirSync(directory);

  const folders = items.filter((item) => {
    const fullPath = path.join(directory, item);
    return statSync(fullPath).isDirectory();
  });

  return folders;
};

export const subfolderPlugins = (folderName: string) => [
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}/${folderName}`,
      private: true,
      main: "../cjs/index.js",
      module: "./index.js",
      types: "./index.d.ts",
    },
  }),
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: LibraryOptions = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  name: "custom-components",
  fileName: (format) => `index.${format}.js`,
};

const folderBuilds = getFolders("./src").map((folder) => {
  return {
    lib: config,
    rollupOptions: {
      input: `src/${folder}/index.ts`,
      output: {
        file: `dist/${folder}/index.js`,
      },
    },
    plugins: [subfolderPlugins(folder)],
  };
});

// https://vitejs.dev/config/
folderBuilds.forEach(
  async ({ lib, rollupOptions: { input, output }, plugins }) => {
    if (
      !excludeFolders.some((excludeFolder) => input.includes(excludeFolder))
    ) {
      await build({
        build: {
          outDir: "dist",
          lib,
          rollupOptions: {
            external: ["react", "react-dom", "tailwindcss"],
            input,
            output: {
              dir: output.file,
              exports: "named",
              format: "esm",
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                tailwindcss: "tailwindcss",
              },
            },
          },
          sourcemap: true,
          emptyOutDir: true,
        },
        plugins: [react(), dts({ rollupTypes: true }), ...plugins],
        css: {
          postcss: {
            plugins: [tailwindcss],
          },
        },
      });
    }
  }
);
