module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-plugin-px2rem")({
            rootValue: 75,
            unitPrecision: 3,
            propWhiteList: [],
            exclude: /node_module/,
            selectorBlackList: ["ignore"],
            ignoreIdentifier: false,
            replace: true,
            minPixelValue: 1
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    // config.plugins.delete("prefetch-index");
    // config.plugins.delete("preload-index");
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    // 压缩代码
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: "async"
    });
  },
  productionSourceMap: false
};
