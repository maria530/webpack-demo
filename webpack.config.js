const path = require('path');
/**
 * about HTMLWebpackPlugin:
 * HTMLWebpackPlugin会创建一个全新的html文件，并且通过代码引用到所有在webpack.config.js中的output的所有文件
 * 这个全新的index.html会覆盖之前手动添加的index.html(以及手动添加的js的引用)
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * about CleanWebpackPlugin:
 * 每次build打包文件，/dist文件夹下面会有很多打包出来的文件，但是不确定哪些是当前在用，哪些是不用的，就会显得很杂乱。
 * CleanWebpackPlugin的功能是在每次npm run build之前都清理掉/dist文件夹的文件，这样就只保存当前用的打包的文件
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    // entry: "./src/index.js",
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output management'
        })
    ],
    output: {
        // filename: "bundle.js",
        filename: '[name].newBundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         }, 
    //         {
    //             test: /\.(png|svg|jpg|gif)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(woff|woff2|eot|ttf|otf)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(csv|tsv)$/,
    //             use: [
    //                 'csv-loader'
    //             ]
    //         },
    //         {
    //             test: /\.xml$/,
    //             use: [
    //                 'xml-loader'
    //             ]
    //         }
    //     ]
    // }
}