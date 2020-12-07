var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: 
              ['@babel/core/preset-env',                           
              '@babel/core/react',
              {'plugins': ['@babel/plugin-proposal-class-properties']}]     
          }
        }
      }
    ]
}
};