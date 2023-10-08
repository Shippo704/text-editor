const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
// add plugin for CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // html webpack plugin
      new HtmlWebpackPlugin({
        template: '.index.html',
        title: 'text-editor'
      }),
      // css webpack plugin
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFileName: '[id].css'
      }),
      // manifest plugin
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'
      }),
      // pws manifest plugin
      new WebpackPwaManifest({
        name: 'text-editor',
        short_name: 'text-editor',
        description: 'This is a text editor',
        background_color: '#7eb4e2',
        theme_color: '#7eb4e2',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
