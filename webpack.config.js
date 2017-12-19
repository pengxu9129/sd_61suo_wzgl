global.$ = require('jquery');
global.Popper = require('popper.js');
require('bootstrap');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
// the path(s) that should be cleaned
let pathsToClean = [
  'build/*.*'
]
// the clean options to use
let cleanOptions = {
  root:     __dirname,
  exclude:  [,,'build/index.html'],
  verbose:  true,
  dry:      false
}

module.exports = {
    devtool: 'null',
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/html/bootstrp-main-header-tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //         {
        //             module: 'jquery',
        //             entry: 'dist/jquery.min.js',
        //             global: 'jQuery',
        //         },
        //         {
        //             module: 'bootstrap',
        //             entry: 'dist/js/bootstrap.min.js',
        //         },
        //         {
        //             module: 'jquery-slimscroll',
        //             entry: 'jquery.slimscroll.min.js',
        //         },
        //         {
        //             module: 'fastclick',
        //             entry: 'lib/fastclick.js',
        //         },
        //         {
        //             module: 'admin-lte',
        //             entry: 'dist/js/adminlte.min.js',
        //         },
        //     ],
        // }),
        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //         {
        //             module: 'bootstrap',
        //             entry: 'dist/css/bootstrap.min.css',
        //             supplements: ['dist/fonts/'],
        //         },
        //         {
        //             module: 'font-awesome',
        //             entry: 'css/font-awesome.min.css',
        //         },
        //     ],
        // }),
        new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
    ],
};