const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack')

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
            {
                test: /\.scss$/,
                use: [
                  'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@sass": path.resolve(
                __dirname,
                "resources/sass"
            )
        }
    },
    plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /^.*blue-admin-vue-components.*$/,
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /^.*helper-vue-components.*$/,
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/bootstrap$/,
        })
    ]
});

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
