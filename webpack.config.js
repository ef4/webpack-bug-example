module.exports = {
  mode: 'development',
  entry: {
    'first': './app.js',
    'second': './additional.js',
  },
  devServer: {
    hot: false,
    client: {
      overlay: false
    }
  }
}