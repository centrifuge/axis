import babel from "rollup-plugin-babel";
import filesize from "rollup-plugin-filesize";
import nodeResolve from "rollup-plugin-node-resolve";
import progress from "rollup-plugin-progress";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
export default {
  input: "src/index.js",
  output: [
    {
      exports: "named",
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true
    },
    {
      exports: "named",
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    progress(),
    nodeResolve(),

    babel({
      babelrc: true
    }),

    filesize()
  ]
};
