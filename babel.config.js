module.exports = {
  babelrcRoots: ["packages/*"],
  presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
  plugins: ["babel-plugin-styled-components"],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "entry"
          }
        ],
        "@babel/preset-react"
      ],
      plugins: [
        [
          require.resolve('babel-plugin-module-resolver'),
          {
            alias: {
              "@centrifuge/axis-utils": "./packages/utils/src"
            }
          }
        ],
        [
          "@babel/plugin-transform-modules-commonjs",
          { allowTopLevelThis: true }
        ],
        [
          "@babel/plugin-proposal-class-properties",
          {
            "loose": true
          }
        ],
        "babel-plugin-styled-components"
      ]
    }
  }
};
