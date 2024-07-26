/*
 * @Date: 2024-07-19 09:58:24
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-19 10:23:18
 * @Description: 
 */
module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: ['last 2 versions']
        }),
        require('postcss-px-to-viewport')({
            viewportWidth: 750, // (Number) The width of the viewport in pixels. Required.
            unitPrecision: 3, // (Number) The decimal places for the unit values.
            viewportUnit: 'vw', // (String) Expected units.
            selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and not convert.
            minPixelValue: 1, // (Number) Set the minimum pixel value to ignore conversions.
            mediaQuery: false // (Boolean) Allow px to be converted in media queries.
        }),
        require('cssnano')({
            preset: 'default'
        })
    ]
}
