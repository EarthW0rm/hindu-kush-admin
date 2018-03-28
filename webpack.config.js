var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
    filename: 'style.css'
    , allChunks: true
});

module.exports = {
    entry: './src/js/app.js'
    , output:{
        path: __dirname + '/dist'
        , filename: 'bundle.js'
        , publicPath: '/dist'
    }
    , module: {
        rules: [
            {
                test: /\.js$/
                , exclude: /(node_modules|bower_components)/
                , use: [
                    {
                        loader: 'babel-loader'
                        , options: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
            ,{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
            , {
                test: /\.scss$/
                , use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
            ,{
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
            }
        ]
    }
    , plugins: [
        extractPlugin
        ,new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};