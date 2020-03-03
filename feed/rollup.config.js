import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import externalGlobals from "rollup-plugin-external-globals";

const NODE_ENV = process.env.NODE_ENV || "development";

export default {
  input: "index.js",
  output: {
    file: 'bundle.js',
    format: 'esm'
   },
   plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    externalGlobals({
      react: 'window.React',
      'react-dom': 'window.ReactDOM',
      'material-ui': 'window.MaterialUI',
    }),
    commonjs(),
    (NODE_ENV !== 'production' && serve({ 
      port: 2000,
      contentBase: ''
    })),
    (NODE_ENV !== 'production' && livereload())
  ],
};
