const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const FontelloPlugin = require("fontello-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './images',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './fonts',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
               test: /\.(html)$/,
               use: ['html-loader']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            meta: { 'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        // new FontelloPlugin({ config: require("./src/assets/fonts/fontello-019ff89e/config.json") })
    ],
}