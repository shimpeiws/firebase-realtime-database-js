module.exports = {
  entry: './src/main.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'app.js'
  },
  devServer: {
    contentBase: 'public/',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }], 'react']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map'
}
