import Ts from "rollup-plugin-typescript2";
import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

import pkg from './package.json' assert { type: "json" }

export default {
  input: ["src/index.ts"],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    del({ targets: 'lib/*' }),
    resolve(),
    Ts({
      clean: true
    }),
    babel({ babelHelpers: 'bundled', })
  ],
};