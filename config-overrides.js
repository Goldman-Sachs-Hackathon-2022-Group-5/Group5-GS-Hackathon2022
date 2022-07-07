const { override, fixBabelImports } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader')
// module.exports = override(
//     // Load antd
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: true,
//     }),
//     // Add `javascriptEnabled` and antd theme configuration
//     // to the Less loader
//     addLessLoader({
//         lessOptions: {
//             javascriptEnabled: true,
//             modifyVars: { '@primary-color': '#1DA57A' },
//         }
//     }),
// );

module.exports = function override(config, env) {
    config.module.rules[1].oneOf.splice(2, 0, {
        test: /\.less$/i,
        exclude: /\.module\.(less)$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            {
                loader: "less-loader",
                options: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        ],
    })

    return config
}