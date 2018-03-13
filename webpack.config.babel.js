import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
console.log(LAUNCH_COMMAND);

const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMAND;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
    API_HOST: encodeURI('https://boiling-shore-39277.herokuapp.com')
  }
});

const base = {
  entry: [
    'babel-polyfill',
    PATHS.app
  ],
  target: 'web',
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      { test: /\.js|jsx$/, 
        exclude: /node_modules/, 
        use: 'babel-loader' 
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, 
        use: 'file-loader'}
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  }
};

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: './src',
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

var productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig,
    productionPlugin,
    new WebpackMd5Hash()
  ]
};

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
);
