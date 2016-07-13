var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// same as 'var Route = require('react-route').Route;' for all elements

var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')

// App scss
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
