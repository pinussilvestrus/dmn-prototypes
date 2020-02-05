const webpack = require('webpack');

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
        test: /\.s[ac]ss$/i,
        use: [

          // Creates `style` nodes from JS strings
          'style-loader',

          // Translates CSS into CommonJS
          'css-loader',

          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader:'file-loader',
        options:{
          name:'[name].[ext]',
          outputPath:'assets/images/'

          // the images will be emited to dist/assets/images/ folder
        }
      }
    ]
  },
  plugins: [

    /* Use the ProvidePlugin constructor to inject jquery implicit globals */
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': "jquery'",
      'window.$': 'jquery'
    })
  ]
};
