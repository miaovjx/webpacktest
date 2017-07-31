/**
 * Created by Administrator on 2017/7/17 0017.
 */
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        //  path: 'path.resolve(__dirname, ./dist)',
        path: __dirname + "/dist",
        filename: 'js/[name]-[hash].js',
        publicPath: 'http://cdn.com/',
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'a.html',
            title: 'aaa',
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'b.html',
            title: 'bbb',
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'c.html',
            title: 'ccc',
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
}