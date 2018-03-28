var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            , {
                test: /\.scss$/
                , use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
    , plugins: [
        extractPlugin
    ]
};