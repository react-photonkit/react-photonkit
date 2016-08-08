'use strict';

const Server = require('karma').Server;
const server = new Server({
  browsers: ['Chrome'],
  singleRun: true,
  frameworks: ['mocha'],
  files: ['./test/*.jsx'],
  preprocessors: { './test/*.jsx': ['webpack', 'sourcemap'] },
  reporters: ['dots'],
  webpack: {
    devtool: 'inline-source-map',
    module: {
			preLoaders: [{
	      test: /\.js?/,
	      exclude: /node_modules/,
	      loader: 'xo-loader'
	    }],
      loaders: [{
        test: /\.js?/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
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
    },
	  xo: {
			envs: ["mocha"],
	    extends: ["xo", "xo-react"],
	    rules: {
	      "quote-props": ["error", "as-needed"]
	    }
	  }
  },
  webpackServer: {
    noInfo: true
  }
});

server.start();
