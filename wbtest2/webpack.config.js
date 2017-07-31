/**
 * Created by Administrator on 2017/7/17 0017.
 */
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: 'js/[name].bundle.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: path.resolve(__dirname, 'src'),
            use: ["style-loader", "css-loader", "postcss-loader"]
        }, {
            test: /\.less$/,
            include: path.resolve(__dirname, 'src'),
            use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
        }, {
            test: /\.html$/,
            use: ["html-loader"]
        }, {
            test: /\.(png|jpg|svg|gif)$/i,
            use: {
                loader: "url-loader",
                options: {
                    limit: 1000,
                    name: 'assets/[name]-[hash:5].[ext]'
                }
            }
        }, {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            exclude: path.resolve(__dirname, 'node_modules')
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
        })
    ]
}