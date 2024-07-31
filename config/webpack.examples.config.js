const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    context: path.resolve(__dirname, '../'),
    entry: [
        './examples/index.jsx'
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'disqus-react': path.resolve('src/index.js'),
        },
    },
    output: {
        path: path.resolve('examples/build'),
        filename: 'examples.bundle.js',
        publicPath: '/examples/js/',
    },
    devServer: {
        hot: true,
        host: "localhost",
        static: path.resolve('src'),
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR globally
    ],
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /(node_modules|build)/,
            include: [
                path.resolve('src'),
                path.resolve('examples'),
            ],
        }],
    },
};
