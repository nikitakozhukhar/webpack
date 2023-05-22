const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  modules: {
    rules: [

    ],
    
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        filename: 'index.html',
      }),
    ],
  }
  

}