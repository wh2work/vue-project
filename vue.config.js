const path = require('path')

const resolve = dir => {
    // __dirname The directory name of the current module.
    return path.join(__dirname, dir)
}

module.exports = {
    // If your app is deployed at a sub-path, you will need to specify that
    // sub-path here. For example, if your app is deployed at
    // https://www.foobar.com/my-app/
    // then change this to '/my-app/'
    // baseUrl:

    // webpack 内部的配置是通过 webpack-chain 维护的。这个库提供了一个 webpack 原始配置的上层抽象，
    // 使其可以定义具名的 loader 规则和具名插件，并有机会在后期进入这些规则并对它们的选项进行修改
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
            .set('_conf', resolve('config'))
    },

    // 打包是不生成.map文件
    productionSourceMap: false
}
