'use strict';

var m = require('mithril');
var Repos = require('../models/Repos.js');
import {card, cardBlock, cardTitle, cardSubtitle, cardAction, cardMediaItem} from 'material-components-mithril';

module.exports = {
  oninit: Repos.loadList,
  view: function() {
    return Repos.list.map(function(repo) {
      return m(card, [
        m(cardBlock, {type: "primary"}, [
          m(cardTitle, {large: true}, repo.name),
          m(cardSubtitle, repo.id)
        ]),
        m(cardBlock, repo.description),
        m(cardBlock, {type: "actions"}, [
          m(cardAction, repo.html_url),
          m(cardAction, repo.clone_url)
        ])
      ])
    })
  }
};
