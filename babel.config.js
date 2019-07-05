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
