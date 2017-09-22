const path = require('path')

module.exports = {
  //set up a relative root directory for the entry files
  context: path.resolve('js'),
  //Set of files we want to include in our build
  entry: ['./utils.js','./app.js'],
  //Output file
  output: {
    //put the bundle.js into this path
    path: path.resolve('build'),
    //wbere the bundle is going to be serve from
    publicPath: '/public/build/js/',
    filename: 'bundle.js'
  },
  //Entry point for webserver
  devServer: {
    contentBase: 'public'
  },
  //Keep and eye to my files for rebuild
  watch: true,
  module: {
    //Array of loaders/preloaders. Every loader is represented by an object
    loaders: [{
      //configure suppor for babel to transpile to es6
      //test is a regex expresion to include all the files to transpile
      test: /\.js/,
      //Exclude is a regex expresion to include all the files to transpile
      exclude: /node_modules/,
      //Loader
      loader: 'babel-loader'
    },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        //Preloader
        enforce: 'pre'
    }]
  },
  resolve: {
    //Look for the possible extension of the file required
    extensions: ['.js','es6']
  }
}