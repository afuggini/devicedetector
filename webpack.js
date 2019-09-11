const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  }
}
