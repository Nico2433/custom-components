import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  minify: true,
  sourcemap: true,
  treeshake: true,
  splitting: true,
  clean: true,
  outDir: "dist/",
  entry: ["src/**", "!src/stories"],
  format: ["cjs", "esm"],
});
