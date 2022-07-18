const path = require("path");

const FaviconsPlugin = require("webpack-favicons");
const HtmlWebpackPlugin = require("html-webpack-plugin");

if (!["development", "production"].includes(process.env.NODE_ENV)) {
  throw new Error("Invalid NODE_ENV");
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, "..", "dist", "frontend", "index.js"),
  plugins: [
    new HtmlWebpackPlugin({
      title: "TS Monorepo",
      meta: {
        "theme-color": "#000000",
        description: "TypeScript Monorepo",
      },
    }),
    new FaviconsPlugin({
      src: "logo.svg",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "build"),
    clean: true,
  },
  experiments: {
    topLevelAwait: true, // part of futureDefaults
  },
};
