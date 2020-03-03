import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
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
    }),
    (NODE_ENV !== 'production' && serve({
      port: 2002,
      contentBase: '',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }))
  ],
};
