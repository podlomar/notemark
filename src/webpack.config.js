const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './frontend/index.jsx',
  output: {
    path: path.join(__dirname, '../dist/web'),
    filename: 'bundle-[hash:6].js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve('./frontend'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlPlugin({
      template: 'frontend/index.html',
      filename: "./index.html",
    }),
    new CopyPlugin([
      { from: './backend/main.py', to: 'main.py' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env', 
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'babel-plugin-transform-async-to-promises',
          ],
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { 
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
               name: '[name]-[hash:6].[ext]',
               outputPath: 'img'
            }
          }
        ]
      },
    ]
  }
}