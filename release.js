#!/usr/bin/env node

var GitHubApi = require('github');

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
var version = 'v0.2.1';
var note = 'create components (tab, table, and list)';

github.releases.createRelease({
  owner: owner,
  repo: repo,
  tag_name: version,
  prerelease: true,
  body: note
});
