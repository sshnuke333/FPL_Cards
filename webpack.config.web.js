/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/web/main.tsx'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                },
            },
            {
                test: /\.(woff2|woff|eot|ttf|otf)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'FPL Cards',
            meta: {
                viewport:
                    'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            template: path.resolve(__dirname, './src/web/template.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
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
