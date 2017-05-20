'use strict';

var m = require('mithril');

var defaultLayout = require('./layout/default-layout');

var landingView = require('./components/landingView');
var reposView = require('./components/reposView');
var aboutView = require('./components/aboutView');

var routes = {
  '/': buildRoute(landingView),
  '/repos': buildRoute(reposView),
  '/about': buildRoute(aboutView)
};

function buildRoute(screen, layout) {
  let layout = layout || defaultLayout;

  return {
    render: function() {
      return m(layout, m(screen));
    }
  }
}

function init() {
  m.route(document.body, '/', routes);
}

module.exports = {
  init: init
};
