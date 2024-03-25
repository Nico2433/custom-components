import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  minify: true,
  sourcemap: true,
  treeshake: true,
  splitting: false,
  clean: true,
  outDir: "dist/",
  entry: ["src/**", "!src/stories", "!src/components/index.ts"],
  format: ["cjs", "esm"],
});
