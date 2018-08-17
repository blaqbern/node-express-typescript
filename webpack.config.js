const nodeExternals = require('webpack-node-externals')

const { root } = require('./webpack/utils')
const { loaders } = require('./webpack/loaders')
const { getPlugins } = require('./webpack/plugins')

const env = process.env.NODE_ENV
const prod = env === 'production'

const baseConfig = {
  entry: root('src', 'index.ts'),
  output: {
    path: root('dist'),
    filename: 'server-bundle.js',
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  module: { rules: loaders },
  plugins: getPlugins(env),
  externals: [nodeExternals()],
}

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  performance: { hints: false },
}

const prodConfig = {
  mode: 'production',
  devtool: 'eval',
  optimization: { minimize: true },
}

module.exports = (env, argv) => Object.assign(
  {},
  baseConfig,
  env.prod ? prodConfig : devConfig
)
