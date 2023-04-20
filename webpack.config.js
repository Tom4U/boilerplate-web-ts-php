// @ts-nocheck
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    entry: './src/ts/main.ts',
    plugins: [
        new ESLintPlugin({
            extensions: ['ts']
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    copy: [
                        { source: './src/assets', destination: './dist' },
                        { source: './html/src/views/pages', destination: './dist/' },
                        { source: './src/api', destination: './dist/api' }
                    ],
                    delete: ['./html']
                }
            }
        }),
        new HtmlPlugin({
            template: 'dist/index.html'
        })
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[fullhash].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
