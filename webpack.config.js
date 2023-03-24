const path = require('path');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');
const { CKEditorTranslationsPlugin } = require('@ckeditor/ckeditor5-dev-translations');

module.exports = {
    devtool: 'source-map',
    performance: {
        hints: false
    },
    entry: path.resolve(__dirname, 'src', 'ckeditor.ts'),
    output: {
        library: 'ClassicEditor',
        path: path.resolve(__dirname, 'build'),
        filename: 'ckeditor.js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    plugins: [
        new CKEditorTranslationsPlugin({
            language: 'en-gb',
            additionalLanguages: 'all'
        })
    ],
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: styles.getPostCssConfig({
                                themeImporter: {
                                    themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                                },
                                minify: true
                            })
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: [ 'ts-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js', '.json' ]
    }
};
