'use strict';

var m = require('mithril');

var header = require('./../components/header');
var body-content = require('./../components/body-content');
var footer = require('./../components/footer');

function view(vnode) {
  return m('.mdc-layout-grid', 
    [
      m(header),
      m(body-content, {}, vnode.children),
      m(footer)
    ]
  );
}

module.exports = {
  view: view
};

