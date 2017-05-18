'use strict';

var m = require('mithril');
var Repos = require('../models/Repos.js');

module.exports = {
  oninit: Repos.loadList,
  view: function() {
    return m('.repo-list', Repos.list.map( function(repo) {
      return m('.repo-list-item', repo.name + ' ' + repo.id)
    }))
  }
};
