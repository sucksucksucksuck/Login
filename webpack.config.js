var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './main.jsx'
    ], //指定打包入口文件为main.js

    //output 配置打包结果 path指定输出文件夹 filename 定义打包结果文件名称
    output: {
        path:'./',
        filename: 'index.js',
    },

    //设置服务器端口号为8888
    devServer: {
        inline: true,
        port: 8888
    },

    //定义对模块的处理逻辑 这里使用loader定义一些列加载器 还有正则 当需要加载的问价匹配test的正则时 就会调用后面的loader文件加载器对文件进行处理 webpack的强大之处在此
    module: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }

}

module.exports = config;