module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@routes': './src/routes',
        '@models': './src/models',
        '@modules': './src/modules',
        '@config': './src/config',
        '@database': './src/database',
        '@middlewares': './src/middlewares',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
