# Webpack

For build frontEnd Web Applications

### Why do we need a build step?

    - Reduce number of requests to the server
    - Code Size. Minify the code
    - File order Dependecies. Import/Export modules
    - Transpilation. Browser understanding new version of JS
    - Lintin. Save important bugs in production

### Install Webpack

    npm install webpack --save-dev

### Run webpack

    i.e: webpack ./app.js bundle.js

### Use webpack server

    - Install server:
      npm i webpack-dev-server --save-dev
    - Run server
      webpack-dev-server bundle/bundle.js (serve the bundle file)
    Check the port in the console (by default take index.html)

### Building multiple Files

  1 - Simple require/import the file from other file
  2 - Adding 3rd party library into my bundle
        - Go to config file and adding it before at entry property. i.e: ['./utils.js', './app.js']

### Loaders (teach Webpack new tricks)

    Loader are the way to process files and if necesary transform them in something else
    - Babel:
      1- Install packages
      2- Support for it in module.loaders within config file
    - esLint:
      1- Install packages
      2- Support for it as `preLoader`

### Pro vs Dev

    ie: minimize the code webpack -p
    - If I want to strip something from my code from my Pro built file `npm i strip-loader --save-dev` and create a new config file for pro (webpack-pro.config.js) in order to extend the webpack.config.js file
    - Run this pro config -> webpack --config webpack-pro.config.js

### CSS and styles loaders

    -Install:
      - npm i css-loader style-loader --save-dev
