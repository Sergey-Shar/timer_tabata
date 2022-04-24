import * as path from 'path';
import * as webpack from 'webpack';
import  HTMLPlugin = require('html-webpack-plugin');
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: webpack.Configuration  = {
  entry: './src/scripts/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'script.[chunkhash].js',
    /*global __dirname*/
    path: path.resolve(__dirname, 'dist'),
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  devServer:  {
    port: 3000,
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

export default config;
