const { root } = require('./utils')

exports.loaders = [
  { test: /\.ts$/, loaders: ['ts-loader'], include: [root('src')] },
  {
    test: /\.ts$/,
    include: [root('src')],
    enforce: 'pre',
    use: {
      loader: 'tslint-loader',
      options: { configFile: root('tslint.yml') },
    },
  }
]
