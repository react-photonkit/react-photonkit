var webpack = require('webpack');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));

var modules = {
  loaders: [{
    test: /\.json$/,
    loader: 'json-loader'
  }, {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['babel-loader']
  }, {
    test: /\.coffee$/,
    exclude: /node_modules/,
    loader: 'coffee-loader'
  }, {
    test: /\.cjsx$/,
    exclude: /node_modules/,
    loaders: ['coffee', 'cjsx']
  }, {
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader'
  }, {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=1000000&mimetype=application/font-woff"
  }, {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  }]
};

if (!argv.target || argv.target === 'build') {
  var config = {
    entry: path.resolve(__dirname, 'src/photon.coffee'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'dist/',
      filename: 'photon.js',
      library: 'ReactPhotonKit',
      libraryTarget: 'umd'
    },
    externals: [
      'react',
      'react-dom'
    ],
    module: modules
  };

  var compiler = webpack(config);
  compiler.run( function (err, stats) {
    console.log('done', err);
  });
} else {
  var WebpackDevServer = require("webpack-dev-server");
  var config = {
    entry: [
      'webpack-dev-server/client?http://localhost:8000/',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'example/app.cjsx')
    ],
    output: {
      path: path.resolve(__dirname, 'example/dist'),
      publicPath: 'example/dist/',
      filename: 'app.js'
    },
    devServer: {
      contentBase: "./example",
      port: 8000,
      stats: {
			  colors: true
		  },
      publicPath: '/example/dist/',
    },
    resolveLoader: {
      modulesDirectories: [
        path.resolve(__dirname, 'node_modules')
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module: modules
  };

  var server = new WebpackDevServer(webpack(config), config.devServer);
  server.listen(8000, 'localhost', function (err) {
    if (err) {
      console.log(err);
      return;
    }
  });
}
