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
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ]
  }
};
