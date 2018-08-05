const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: __dirname + "/src/app/index.js", 
  output: {
    path: __dirname + '/dist', 
    filename: 'bundle.js',  
    publicPath: '/' 
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/
          ]
        },
        {
            test: /\.html/,
            loader: 'raw-loader'
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ]
        }
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin({
        template: __dirname + "/src/public/index.html",
        inject: 'body'
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
    new UglifyJSPlugin(),  
    new CopyWebpackPlugin([{  
        from: __dirname + '/src/public'
    }])
  ]
};