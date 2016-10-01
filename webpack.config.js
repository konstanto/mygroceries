"use strict"

let webpack = require("webpack");
let path = require("path");

let config = {
    entry: {
        app: [
            "./server.ts"
        ]
    },
    target: "node",
    output: {
        path: path.resolve("./dist"),
        filename: "server.js"
    },

    resolve: {
        // Add '.ts' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loaders: ["ts-loader"] },
            { test: /\.json$/, loaders: ["json-loader"] }
        ]
    },
    node: {
        fs: "empty",
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    }
};

module.exports = config;

