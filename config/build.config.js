var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    path = require('path');

// ----- Output file paths
var outputDir = '../dist/',
    cssOutput = 'css/style.[chunkhash:8].css',
    jsOutput = 'js/[name].[chunkhash:8].bundle.js';

module.exports = {
    entry: {
        common: './src/common.js',
        home: './src/home.js',
        contact: './src/contact.js'
    },
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: jsOutput
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['babel-preset-env'] }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: './config/postcss.config.js'
                                }
                            }
                        },
                        'sass-loader'
                    ],
                    publicPath: '../'
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /(node_modules|img)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                exclude: /(node_modules|fonts)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/img/'
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        attrs: ['img:src', 'source:srcset', 'img:srcset']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*'], {
            root: path.resolve(__dirname + '/../')
        }),
        new ExtractTextPlugin(cssOutput),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            children: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'home',
            children: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'contact',
            children: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            excludeChunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/contact.html',
            excludeChunks: ['home']
        }),
    ]
};
