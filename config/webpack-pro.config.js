const webpackStripLoader = require('strip-loader')
//Import all the configuration from my webconfig dev file in order to extend it
const devConfig = require('./webpack.config.js')

const stripLoader = {
  test: [/\.js$/],
  exclude: /node_modules/,
  //here I will call a function loader with all the things I want to strip out from my code
  loader: webpackStripLoader.loader('console.log')// ie. remove console.log statements
}

//Add the extra configuration to the dev config
devConfig.module.loaders.push(stripLoader)
//Stop watching changes in PRO
devConfig.watch = false

module.exports = devConfig