module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'app.bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};
