/**
 * Created by Administrator on 2017/7/17 0017.
 */
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        //  path: 'path.resolve(__dirname, ./dist)',
        path: path.resolve(__dirname, "/dist"),
        filename: 'js/[name]-[hash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}