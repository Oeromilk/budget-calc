var Backbone = require("backbone");
var React = require("react");
var ReactDom = require("react-dom");

var HomeContainer = require('./components/home-container.jsx').HomeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDom.render(
      React.createElement(HomeContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
