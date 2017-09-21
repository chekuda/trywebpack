module.exports = {
	//Set of files we want to include in our build
	entry: ['./js/utils.js','./js/app.js'],
	//Output file
	output: {
		filename: 'bundle.js'
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