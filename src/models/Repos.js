'use strict';

var m = require('mithril');

module.exports = {
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
      this.list = repos;
    });
  }
};
