#!/usr/bin/env node

var GitHubApi = require('github');
var Package = require('./package.json');

var github = new GitHubApi({
  version: '3.0.0',
  debug: true,
  protocol: 'https',
  host: 'api.github.com',
  timeout: 5000,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'user-agent': 'react-photonkit'
  }
});

github.authenticate({
  type: "oauth",
  token: process.env.GITHUB_TOKEN
});


var owner = 'react-photonkit';
var repo = 'react-photonkit';
var version = Package.version;
var note = 'split input into input, checkbox, textarea and radio';

github.releases.createRelease({
  owner: owner,
  repo: repo,
  tag_name: version,
  prerelease: true,
  body: note
});
console.log(version);
