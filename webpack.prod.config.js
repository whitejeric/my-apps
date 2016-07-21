var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output:{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query:
          {
            presets:['react', 'es2015']
          }
      },
    ],
  }
}
