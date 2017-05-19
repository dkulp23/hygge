'use strict';

var m = require('mithril');
var Repos = require('../models/Repos.js');
var mcm = require('material-components-mithril');

module.exports = {
  oninit: Repos.loadList,
  view: function() {
    return m(mcm.button, 'Submit');
    //   m.component(list, {
    //     header: {
    //       title: 'Github Repos'
    //     },
    //     tiles: [
    //       m.component(listTile, {
    //         title: 'I am a list tile',
    //         subtitle: 'Does this work?'
    //       })
    //     ]
        // Repos.list.map( function(repo) {
        //   return m(listTile, {
        //     title: repo.name,
        //     subtitle: repo.id
        //   })
        // })
  }
};
