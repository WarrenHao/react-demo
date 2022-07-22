// 添加自定义配置

const path = require('path')

module.exports = {
    webpack:{
        // 配置别名
        alias: {
            // 约定用@代替src
            '@': path.resolve(__dirname, 'src')
        }
    }
}