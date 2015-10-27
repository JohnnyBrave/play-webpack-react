import path from 'path';
import webpack from 'webpack';
import merge from 'lodash.merge';
import ExtractTextPlugin from "extract-text-webpack-plugin";
import project from './project';

const DEBUG = !process.argv.includes('release');
const VERBOSE = process.argv.includes('verbose');
const WATCH = global.watch;

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];
const JS_LOADER = {
  test: /\.jsx?$/,
  include: [
    path.resolve(__dirname, project.input),
  ],
  exclude: [
    path.resolve(__dirname, './node_modules'),
    path.resolve(__dirname, './bower_components'),
    path.resolve(__dirname, './tools'),
    path.resolve(__dirname, './target'),
  ],
  loader: 'babel',
};

// Entries
var entries = {}, entry, entryValues;
Object.keys(project.entries).forEach((key) => {
  entry = project.entries[key];
  entries[key] = (WATCH ? [
    'webpack-hot-middleware/client'
  ] : []);
  if (Array.isArray(entry)) {
    entry.forEach((e) => {
      entries[key].push(path.resolve(__dirname, project.input, e));
    });
  } else {
    entries[key].push(path.resolve(__dirname, project.input, entry));
  }
});

// Base configuration
const baseConfig = {
  output: {
    path: path.join(__dirname, (DEBUG ? project.output.debug : project.output.release)),
    publicPath: "/assets/",
  },
  cache: false,
  debug: DEBUG,
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },
  resolve: {
    extensions: [ "", ".js", ".jsx" ]
  },
  externals: {
    'jquery': 'jQuery',
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      '__DEV__': DEBUG,
    }),
    new webpack.optimize.CommonsChunkPlugin(project.commonsChunk),
    new ExtractTextPlugin(project.commonsCss),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.txt$/,
        loader: 'raw-loader',
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader'),
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader'),
      },
    ],
  },
  postcss: function plugins() {
    return [
      require('postcss-import')({
        onImport: files => files.forEach(this.addDependency),
      }),
      require('precss')(),
      require('autoprefixer')({
        browsers: AUTOPREFIXER_BROWSERS,
      }),
    ];
  },
};

// App configuration
const appConfig = merge({}, baseConfig, {
  entry: entries,
  output: {
    filename: "[name].bundle.js"
  },
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  plugins: [
    ...baseConfig.plugins,
    ...(DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: VERBOSE,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ]),
    ...(WATCH ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ] : []),
  ],
  module: {
    loaders: [
      WATCH ? merge({}, JS_LOADER, {
        query: {
          // Wraps all React components into arbitrary transforms
          // https://github.com/gaearon/babel-plugin-react-transform
          plugins: ['react-transform'],
          extra: {
            'react-transform': {
              transforms: [
                {
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module'],
                }, {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react'],
                },
              ],
            },
          },
        },
      }) : JS_LOADER,
      ...baseConfig.module.loaders,
    ],
  },
});

export default appConfig;
