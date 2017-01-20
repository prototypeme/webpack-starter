var services = require('../../services/service1.js');
var $ = require('jquery');
var styles = require('./myOwnStyle.scss');
var compB = require('../component-B/compB.js');

module.exports = {
  render: function () {
    $('body').append($('<h2 class="' + styles.comp + '">Component A says hello!</h2>'));
    compB.render();
  },

  callAService: function() {
    services.serviceCall();
  }
};
