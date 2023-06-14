const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/app.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [
                    { loader: "ts-loader" }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.mp3$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'file-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
}