const { build } = require("esbuild");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");
const chokidar = require("chokidar");

function time() {
  const now = new Date();
  return [
    now.getHours() > 12 ? now.getHours() - 12 : now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
    now.getMilliseconds(),
  ].join(":");
}

const examplePlugin = {
  name: "example",
  setup(build) {
    build.onEnd((result) => {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(`Rebuilt on ${time()}`);
    });
  },
};

const handler = process.argv.includes("--watch")
  ? (config) =>
      chokidar
        .watch("src")
        .on("all", (event, path) => build(config).catch(() => process.exit(1)))
  : (config) => build(config).catch(() => process.exit(1));

handler({
  entryPoints: ["src/index.jsx"],
  bundle: true,
  outfile: "public/assets/main.js",
  watch: false,
  plugins: [
    postCssPlugin({
      plugins: [
        require("postcss-import"),
        require("autoprefixer"),
        require("tailwindcss"),
      ],
    }),
    examplePlugin,
  ],
});
