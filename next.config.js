const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/giphybro' : ''

module.exports = {
  publicRuntimeConfig: {
    assetPrefix,
    giphyToken: '97AHOMxJeI3AqA1JBa1qycqbX8Pod3Xi',
  },
  assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}