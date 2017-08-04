var path = require('path');

const config = {
  entry: {
    app: './app'
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js' 
  },

  devServer: {
    port: 4000
  }

}

module.exports = config