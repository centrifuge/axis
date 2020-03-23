const resolve = require("path").resolve;


module.exports = ({config, mode}) => {

  config.module.rules.push({
    test: /\.stories\.tsx$|\/src\/.*\.tsx$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            parser: 'babylon',
          },
        },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ]
  });

  config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: ["file-loader"],
      include: resolve(__dirname, "../")
    }
  );


  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', {flow: false, typescript: true}]],
    },
  });


  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.mainFields = ["browser", "module", "main", "source"];
  return config;
};
