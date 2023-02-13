module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: [
                'last 2 version',
                '> 1%',
                'IE 10',
                'ie > 9',
                'safari 5',
                'opera 12.1',
                'ios 8',
                'android 4',
            ],
        }),
        require('cssnano')({
            preset: [
                'default',
                {
                svgo: {
                    exclude: true,
                },
                discardComments: {
                    removeAll: true,
                },
                colormin: false,
                discardUnused: { fontFace: false },
                },
            ],
        }),
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
            autoprefixer: {
                grid: false,
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'nesting-rules': true,
            },
        }),
        require('postcss-nested'),
        require('postcss-import'),
    ],
};
