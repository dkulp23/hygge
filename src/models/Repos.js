'use strict';

var m = require('mithril');

var GHRepos = {
  list: [],
  loadList: function() {
    return m.request({
      method: 'GET',
      url: 'https://api.github.com/user/repos',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })
    .then( repos => {
     GHRepos.list = repos;
    });
  }
};

module.exports = GHRepos;
