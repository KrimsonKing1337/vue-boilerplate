const webpack = require('webpack');
const resolve = require('path').resolve;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssNanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const rootPath = resolve(__dirname, '../');

const env = process.env.NODE_ENV || 'development';

const extractStyles = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  disable: process.env.NODE_ENV === 'development'
});

// если нужно минифицировать css - подкидываем плагин, иначе - пустую функцию (как того требует стандарт вебпака)
const optimizeCssNano = env === 'production'
  ? new OptimizeCssNanoPlugin({
    sourceMap: true,
    cssnanoOptions: {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    },
  })
  : () => {};

module.exports = {
  mode: env,
  optimization: {
    minimize: env === 'production'
  },
  devtool: 'source-map',
  entry: {
    bundle: `${rootPath}/src/index.js`
  },
  output: {
    path: `${rootPath}/build/`,
    filename: '[name].[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(`${rootPath}/build/*`, {
      root: `${rootPath}/build/`,
      exclude: ['.gitkeep'],
    }),
    extractStyles,
    optimizeCssNano,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${rootPath}/src/htmlRoot.ejs`,
      filename: 'index.html',
      inject: 'body',
      title: 'vue-boilerplate',
      svgoConfig: {
        cleanupIDs: true,
        removeTitle: false,
        removeAttrs: false,
        removeViewBox: true
      }
    }),
    new CopyWebpackPlugin([{
      from: `${rootPath}/public/`,
      to: `${rootPath}/build/`
    }]),
    new webpack.DefinePlugin({
      "ENV": JSON.stringify(env)
    }),
  ],
  context: rootPath,
  resolve: {
    extensions: ['.js', '.css', '.json', '.md'],
    modules: ['src', 'public', 'node_modules'],
    alias: {
      vue: env === 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        hotReload: true,
        esModule: true
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: extractStyles.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 0,
            modules: false
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: [require('autoprefixer')()]
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [`${rootPath}/src`],
            outputStyle: 'collapsed'
          },
        }],
        fallback: 'style-loader'
      })
    }, {
      test: /\.css$/,
      oneOf: [
        {
          resourceQuery: '/module/',
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
              localIndentName: '[local]_[hash:base64:5]'
            }
          }
        },
        {
          use: 'css-loader?sourceMap=true'
        }
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf)$/,
      use: 'file-loader?name=[name].[ext]&outputPath=./assets/'
    }, {
      test: /\.html$/,
      use: 'raw-loader'
    }]
  },
  devServer: {
    host: 'localhost',
    port: '3000',
    contentBase: resolve(__dirname, '../public'),
    publicPath: '/',
    historyApiFallback: {
      rewrites: [
        {from: /./, to: '/'}
      ]
    },
    hot: true,
    open: true,
  }
};
