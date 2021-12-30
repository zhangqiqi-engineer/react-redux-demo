const { override, fixBabelImports, addLessLoader,addWebpackAlias } = require('customize-cra')
const path = require('path')


const alter_config= ()=>(config, env)=>{
  config.module.rules= [
    {
      test: /\.md$/,
      use: "raw-loader"
    }]

  return config;
}

module.exports = override(
  alter_config(),   //将自定义配置组合进来
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
    views:path.resolve(__dirname, './src/views'),
    routers:path.resolve(__dirname, './src/routers'),

  })
)


