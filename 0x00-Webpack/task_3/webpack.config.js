const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './header/header.js',
    body: './body/body.js',
    footer: './footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8564,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
    }),
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

