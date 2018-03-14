var path = require("path");
var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
let externals = _externals();
/*
{
    loader: "unicode-loader"
}*/
module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: {
        server: "./server"
    },
    target: 'node',
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].dist.js',
        library: "server",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js']
    },
    externals: externals,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: false,
        __dirname: false,
        setImmediate: true
    },
    module: {
        loaders: [
            {
                loader: "unicode-loader"
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use:[

                    {
                        loader: 'babel-loader',
                        query: {
                            "presets": [
                                "es2015",
                                "stage-0",
                                "react"
                            ],
                            plugins: [
                                "transform-es2015-unicode-regex",
                                "transform-runtime",
                                "transform-es2015-shorthand-properties",
                                "transform-es3-property-literals",
                                "transform-es3-member-expression-literals",
                                [
                                    "transform-es2015-computed-properties",
                                    {
                                        "loose": true
                                    }
                                ]
                            ]
                        }
                    }

                ],
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output:{
                ascii_only:true,
            },
            compress: {
                warnings: false,
                drop_debugger:true
            }
        })
    ]
};
//ASCII-only
function _externals() {
    let manifest = require('./package.json');
    let dependencies = Object.assign({}, manifest.dependencies, manifest.devDependencies);


    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}