const { root } = require('./utils')
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack')

function getPlugins(env) {
  const base = new DefinePlugin({
    __DEV__: env === 'development',
    __PROD__: env === 'production',
  })

  return env === 'development'
    ? [base, new HotModuleReplacementPlugin()]
    : [base]
}

exports.getPlugins = getPlugins
