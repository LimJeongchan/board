const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // build 경로 설정
  outputDir: "C:/studyvue/workspace/board/src/main/webapp",
  devServer: {
    proxy: {
      '/api': {
        // '/api' 로 들어오면 포트 8081(스프링 서버)로 보낸다
        target: 'http://localhost:8081',
        changeOrigin: true // cross origin 허용
      }
    }
  }
})
