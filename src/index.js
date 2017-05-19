'use strict';

import "material-components-web/dist/material-components-web.css";

var m = require('mithril');

var RepoList = require('./views/RepoList.js');

m.route(document.body, '/landing', {
  '/landing': RepoList
})
