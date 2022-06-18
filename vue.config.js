const { defineConfig } = require("@vue/cli-service");
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://nezquest.azurewebsites.net/',
        disableHostCheck: true,
      }
    }
  },
}
