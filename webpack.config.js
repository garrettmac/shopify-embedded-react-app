
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app:[path.join(__dirname, 'src/client/index.js')],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      '@shopify/polaris',
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname +'/src/public'
  },
  devtool: 'source-map',
  module:{
    loaders:[
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test:/\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { minimize: true }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new CopyWebpackPlugin([
      {from:"src/static/assets/images",to:"images"}
    ]),
    new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.bundle.js'}),
  ]
}
