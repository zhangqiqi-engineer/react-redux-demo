const { override, fixBabelImports, addLessLoader,addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import',{
    libraryName: 'antd', // 或其他第三方组件库名称
    libiaryDirectory: 'es', // 组件位置
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
  addWebpackAlias({
    services: path.resolve(__dirname, './src/services'),
    components: path.resolve(__dirname, './src/components'),
    pages: path.resolve(__dirname, './src/pages'),
    utils: path.resolve(__dirname, './src/utils'),
    store:path.resolve(__dirname, './src/store'),
    view:path.resolve(__dirname, './src/view'),
    routers:path.resolve(__dirname, './src/routers'),

  })
)


