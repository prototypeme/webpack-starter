module.exports = {
  entry: './app/js/app.js',
  output: {
    filename: './dist/build.js'
  },
  module: {
    preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
    loaders: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        loader: 'style!css!sass'
      }
    ]
  }
}
