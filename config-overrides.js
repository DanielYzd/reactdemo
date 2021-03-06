const { override, fixBabelImports, addBabelPlugins } = require("customize-cra");

module.exports = override(
  // //配置支持高阶组件装饰器
  addBabelPlugins(
    // ⽀持装饰器
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ]
  ),
  // 配置antd按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
