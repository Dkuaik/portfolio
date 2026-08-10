import tailwind from "bun-plugin-tailwind";

const OUT_DIR = "./dist";

await Bun.$`rm -rf ${OUT_DIR}`.quiet();

const result = await Bun.build({
  entrypoints: ["./index.html"],
  outdir: OUT_DIR,
  plugins: [tailwind],
  minify: true,
  sourcemap: "none",
  // Without this React ships its development build (dev warnings, ~3x the bytes).
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  naming: {
    entry: "[name].[ext]",
    chunk: "assets/[name]-[hash].[ext]",
    asset: "assets/[name]-[hash].[ext]",
  },
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

const totalBytes = result.outputs.reduce((sum, output) => sum + output.size, 0);
console.log(`Built ${result.outputs.length} files → ${OUT_DIR} (${(totalBytes / 1024).toFixed(1)} KB)`);
