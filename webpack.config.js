const nodeExternals = require('webpack-node-externals')

const { root } = require('./webpack/utils')
const { loaders } = require('./webpack/loaders')
const { getPlugins } = require('./webpack/plugins')

const env = process.env.NODE_ENV
const prod = env === 'production'

const baseConfig = {
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
  entry: root('src', 'server.ts'),
  mode: 'development',
  devtool: 'source-map',
  performance: { hints: false },
}

const prodConfig = {
  entry: root('src', 'app.ts'),
  mode: 'production',
  devtool: 'eval',
  optimization: { minimize: true },
}

module.exports = Object.assign(
  {},
  baseConfig,
  prod ? prodConfig : devConfig
)
