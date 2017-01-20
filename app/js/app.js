require('../assets/style.scss');

var $ = require('jquery');

$('body').append($('<h2>Hello jquery</h2>'));

//Code splits during build and loaded using a separate script tag
require.ensure(['./components/component-A/compA.js'], function(require) {

  var serv2 = require('./components/component-A/compA.js');
  console.log('Module B - Service 2 loaded');
  console.log(serv2);

  serv2.render();
  serv2.callAService();
});
