var services = require('../../services/service1.js');

var $ = require('jquery');
var styles = require('./myOwnStyle.scss');

module.exports = {
  render: function () {
    $('body').append($('<h2 class="' + styles.comp + '">Component B says hello!</h2>'));
  }
};
