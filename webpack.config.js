const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


const path = require('path');

module.exports = { 
    mode: 'development',
    entry: {
      index: './src/index.js',
      work:'./src/work/work.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon:'./src/assets/logo/favicon.ico',
    publicPath: './',
    inject: true,
    chunks: ['index'],
  }),
  new HtmlWebpackPlugin({ 
    filename: 'work/treelife.html',
    template: './src/work/treelife.html',
    inject: true,
    chunks: ['work'],
  }),
  new HtmlWebpackPlugin({ 
    filename: 'work/solarsmart.html',
    template: './src/work/solarsmart.html',
    inject: true,
    chunks: ['work'],
  }),
  new HtmlWebpackPlugin({ 
    filename: 'work/animal-rescue.html',
    template: './src/work/animal-rescue.html',
    inject: true,
    chunks: ['work'],
  }),
  new MiniCssExtractPlugin({
    filename: "main.css"
  }),
  new HtmlWebpackInlineSVGPlugin(),
],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
    },
    {
        test:  /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[name][ext]'
        }
    },
    {
      test:/\.svg$/,
      type: 'asset/resource',
      generator: {
        filename: 'assets/images/[name][ext]'
    }
    },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
       },
       {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
       }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
        new CssMinimizerPlugin()
    ]
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    open: true,
    compress: true,
    port: 8000,
    hot: false,
    liveReload: true,
  },

};