'use strict';

var m = require('mithril');

var RepoList = require('./views/RepoList.js');

m.route(document.body, '/landing', {
  '/landing': RepoList
})