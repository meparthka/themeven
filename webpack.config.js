const path = require("path");
const fs = require("fs");

module.exports = {
    mode: 'development',
    entry: {
        home: path.join(__dirname, 'src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'themeven.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 3500
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
}
