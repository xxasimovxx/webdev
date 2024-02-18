const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Load JS and JSX files through Babel
 */
const babelLoader = {
  rules: [
    {
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env',
            ['@babel/preset-react', {'runtime': 'automatic'}]]
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      // use: ['file-loader'],
      type: "src/client/components/images/kinematyka"
    },
    {
       test: /\.(png|jpg)$/, 
       use: 'url-loader?limit=8192' }
  ]
};

const resolve = {
  extensions: ['.js', '.jsx']
};

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/server.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'server.cjs',
  },
  module: babelLoader,
  plugins: [
    new webpack.EnvironmentPlugin({
      PORT: 3000
    })
  ],
  resolve
};

const clientConfig = {
  target: 'web',
  mode: 'development',
  entry: './src/client/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
     /*
      * Appends /static to index.html when looking for client.js
      * This is where Express is serving static files from
      */
    publicPath: '/static',
    filename: 'client.js',
  },
  module: babelLoader,
  plugins: [
    new htmlWebpackPlugin({
      template: `${__dirname}/src/client/index.html`
    }),
  ],
  resolve
};

module.exports = [serverConfig, clientConfig]