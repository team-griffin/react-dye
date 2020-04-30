import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/es/react-dye.js',
      format: 'es',
    },
    {
      file: 'dist/cjs/react-dye.js',
      format: 'cjs',
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: [
    'react',
  ],
};
