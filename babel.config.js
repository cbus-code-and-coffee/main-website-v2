// babel.config.js
// eslint-disable-next-line no-undef
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "2",
        targets: { node: "current" },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString("process");
          },
        },
      };
    },
  ],
};
