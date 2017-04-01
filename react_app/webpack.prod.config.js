"use strict";
let path = require('path');
let fs = require('fs');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require('webpack');
let ip = require('ip');
let localIp = ip.address();
let autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');//动态生成html
var CopyWebpackPlugin = require('copy-webpack-plugin');//复制文件
/**
 * 入口配置
 * @type {Object}
 */
var entry={
    vendor: ['react', 'react-dom','es6-promise','whatwg-fetch','./src/utils/js/public.js'],
    /**
     * 首页入口文件
     * @type {String}
     */
    home: './src/app/home/app.js',
    /**
     * 案例页入口文件
     * @type {String}
     */
    example: './src/app/example/app.js',
    /**
     * 七夕活动引导页入口文件
     * @type {String}
     */
    activity_lover_guide: './src/app/activity_lover_guide/app.js',
    /**
     * 七夕活动展示页入口文件
     * @type {String}
     */
    activity_lover_info: './src/app/activity_lover_info/app.js',
    /**
     * 七夕活动注册页入口文件
     * @type {String}
     */
    activity_lover_register: './src/app/activity_lover_register/app.js',
    /**
     * 七夕活动注册成功入口文件
     * @type {String}
     */
    activity_lover_register_success: './src/app/activity_lover_register_success/app.js',
    /**
     * 七夕活动分享页入口文件
     * @type {String}
     */
    activity_lover_share: './src/app/activity_lover_share/app.js'
};

module.exports = {
    /*
    * babel参数
    * */
    babelQuery: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-runtime', 'add-module-exports', 'typecheck', "transform-decorators-legacy"],
        cacheDirectory: true
    },
    /**
     * 入口文件
     * @type {Object}
     */
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '.././',
        filename: '[name]/[name].bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0',
                exclude: /node_modules/,
                query: this.babelQuery
            },
            {
                test: /\.scss\?l$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[path][name]_[local]_[hash:base64:5]&sourceMap!postcss?sourceMap!sass?sourceMap')
            }, {
                test: /\.(png|jpg)$/,
                loader: "url?name=[path][name].[ext]&limit=8192"
            }]
    },
    postcss: function () {
        return [autoprefixer];
    },
    resolve: {
        extensions: ['', '.js', '.scss']
    },
    plugins: [
        /**
         * 生成html
         */
        /**
         * 首页
         * @type {String}
         */
        new HtmlWebpackPlugin({
            title: 'Hello World app',
            keywords: '我的页面关键字',
            description: '我的页面描述',
            filename: './home/home.html',
            template:  './src/app/common/common.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['vendor','home'],
            //要把script插入到标签里
            inject: true,
            hash: true
        }),
        /**
         * 案例页
         * @type {String}
         */
        new HtmlWebpackPlugin({
            title: 'Hello Mobile app',
            keywords: '我的页面关键字',
            description: '我的页面描述',
            filename: './example/example.html',
            template:  './src/app/common/common.html',
            chunks: ['vendor','example'],
            inject: true,
            hash: true
        }),
        /**
         * 七夕活动引导页
         * @type {String}
         */
        new HtmlWebpackPlugin({
            title: '领投鸟理财-七夕，为爱告白',
            keywords: '我的页面关键字',
            description: '我的页面描述',
            filename: './activity_lover_guide/activity_lover_guide.html',
            template:  './src/app/common/common.html',
            chunks: ['vendor','activity_lover_guide'],
            inject: true,
            hash: true
        }),
        /**
         * 七夕活动展示页
         * @type {String}
         */
        new HtmlWebpackPlugin({
            title: '领投鸟理财-七夕，为爱告白',
            keywords: '我的页面关键字',
            description: '我的页面描述',
            filename: './activity_lover_info/activity_lover_info.html',
            template:  './src/app/common/common.html',
            chunks: ['vendor','activity_lover_info'],
            inject: true,
            hash: true
        }),
        /**
         * 七夕活动注册页
         * @type {String}
         */
        new HtmlWebpackPlugin({
            title: '领投鸟理财-七夕，为爱告白',
            keywords: '我的页面关键字',
            description: '我的页面描述',
            filename: './activity_lover_register/activity_lover_register.html',
            template:  './src/app/common/common.html',
            chunks: ['vendor','activity_lover_register'],
            inject: true,
            hash: true
        }),
        /**
         * 七夕活动注册成功页
         * @type {String}
         */
        new HtmlWebpackPlugin({
            title: '领投鸟理财-七夕，为爱告白',
            keywords: '我的页面关键字',
            description: '我的页面描述',
            filename: './activity_lover_register_success/activity_lover_register_success.html',
            template:  './src/app/common/common.html',
            chunks: ['vendor','activity_lover_register_success'],
            inject: true,
            hash: true
        }),
        /**
         * 七夕活动分享页
         * @type {String}
         */
        new HtmlWebpackPlugin({
            title: '今年七夕,我的告白亮了！',
            keywords: '我的页面关键字',
            description: '我的页面描述',
            filename: './activity_lover_share/activity_lover_share.html',
            template:  './src/app/common/common.html',
            chunks: ['vendor','activity_lover_share'],
            inject: true,
            hash: true
        }),
        //使用压缩丑化js插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$scope', '$']
            }
        }),
        //拷贝文件到dist目录
        new CopyWebpackPlugin(
            [{
                from: './src/app/image',
                to: './image'
            }
            ]
        ),
        /**
         * 调用dll的内容
         * @type {[type]}
         */
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     //这里引入manifest文件
        //     manifest: require('./dist/vendor-manifest.json')
        // }),
        /**
         * 提取公共部分js
         * @type {String}
         */
        new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),
        new ExtractTextPlugin("[name]/[name].bundle.css")
        
    ]
}