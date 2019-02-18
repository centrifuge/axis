import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from "./package.json";

const external = [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
];

const makeExternalPredicate = externalArr => {
    if (externalArr.length === 0) {
        return () => false;
    }
    const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
    return id => pattern.test(id);
}



process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

export default {
    input: 'src/index.js',
    output: [
        {
            exports:"named",
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            exports:"named",
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        progress(),
        nodeResolve(),

        babel({
            babelrc: true,
            runtimeHelpers:true
        }),

        filesize()
    ],
};
