// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

// let plugins = [];

// comment this to disable analyzer
// plugins.push(new BundleAnalyzerPlugin());


APP_DESCRIPTION = "outbreak.info is a standardized, searchable platform to discover and explore COVID-19 and SARS-CoV-2 data from the Center for Viral Systems Biology (cvisb.org) at Scripps Research. It contains three parts: a standardized searchable database of COVID-19 research; customizable real-time surveillance reports on SARS-CoV-2 variants and mutations; and an explorable interface to examine changes in epidemiological data.";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_global.scss";`
      }
    }
  },
  configureWebpack: {
    // plugins,
    optimization: {
      splitChunks: {
        chunks: "async",
        minSize: 10000,
        maxSize: 250000
      }
    }
  }
};
