const { override, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = override(
  fixBabelImports('import',{
    libraryName: 'antd', // 或其他第三方组件库名称
    libiaryDirectory: 'es', // 组件位置
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  })
)


