/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
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
        new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: '8888',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    mangle: true,
                    warnings: false,
                    format: { comments: false },
                },
                extractComments: false,
                exclude: [/\.min\.js$/gi],
            }),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            maxSize: 250000,
        },
    },
    performance: {
        hints: false,
    },
};
