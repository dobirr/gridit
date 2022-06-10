const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');

// Mode
let mode = "development";
if(process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        filename: 'scripts/bundle.min.js',
        path: path.resolve(__dirname, 'dist/files/assets'),
    },
    module: {
        rules: [
            // Process SCSS to Minified css
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {   // translates CSS into CommonJS
                        loader: 'css-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {   // post-processing with autoprefixing
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {   // compiles Sass to CSS
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false,
                        },
                    }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader",
                    options: {
                        sourceMap: false
                    }
                }
            },
            // Process Fonts
            {
                test: /(fonts).+\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename : './fonts/[name][ext][query]',
                },
            },
            // Process Images
           /* {
                test: /(images).+\.(png|jpe?g|svg|gif|webp)$/i,
                type: "asset/resource",
                generator: {
                    filename : './fonts/[name][ext][query]',
                },
            },*/
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "./styles/bundle.min.css",
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/images", to: "images" },
            ],
        }),
        new CleanWebpackPlugin(),
        new LiveReloadPlugin(),
    ],
};