const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'FPL Cards',
            meta: {
                viewport:
                    'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheCompression: false,
                    cacheDirectory: true,
                },
            },
            {
                test: /\.(woff2|woff|eot|ttf|otf)$/,
                loader: 'file-loader',
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            minSize: 10000,
            maxSize: 250000,
        },
    },
};
