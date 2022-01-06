const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  entry: {
    main: path.resolve(__dirname, '../src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../lib'),
            path.resolve(__dirname, '../history'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs:  3 ,
                  },
                ],
                '@babel/preset-react',
              ],
              "plugins": [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties"
              ]
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      index: 'index.html',
      template: path.resolve(__dirname, '../template.html'),
    }),
    new webpack.DefinePlugin({
      "__DEV__": JSON.stringify("production"),
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8088',
    contentBase: path.resolve(__dirname, '../dist'),
    // hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    overlay: {
      errors: true,
    },
  }
}
