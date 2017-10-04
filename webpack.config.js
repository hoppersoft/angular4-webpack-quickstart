module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./",
    port: 8080,
    historyApiFallback: true,
    inline: true
  },
  entry: './main.ts',
  output: {
    filename: 'js/bundle.js',
    sourceMapFilename: "js/bundle.js.map",
  },
  resolve: {
    // Add .ts and .tsx as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a .ts or .tsx extension will be handled by 	s-loader
      { 
        test: /\.tsx?$/, 
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'] 
      },
      { 
        test: /\.(html|css)$/, 
        loader: 'raw-loader',
        exclude: /\.async\.(html|css)$/
      }
    ]
  }
}
