// path 모듈 불러오기
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // 최종 번들링된 자바스크립트
    filename: 'main.js',
    // dist를 배포용 폴더로 사용
    path: path.resolve(__dirname, 'build')
  },
  plugins:[new HtmlWebpackPlugin({
    template:"./index.html"
  })],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: ['file-loader'],
      }
    ]
  },
  devServer:{
    static:{
      directory:path.resolve(__dirname,'build')
    },
    port:8080
  }
}