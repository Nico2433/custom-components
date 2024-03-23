import { defineConfig } from "tsup";

export default defineConfig({
  splitting: false,
  clean: true,
  sourcemap: true,
  dts: true,
  minify: true,
  entry: ["src/**", "!src/stories"],
  format: ["cjs", "esm"],
  outDir: "dist/",
  esbuildOptions(options, context) {
    options.outbase = "./";
  },
});
