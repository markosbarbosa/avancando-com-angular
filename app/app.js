require('angular');
require('./locale/angular-locale_pt-br');

angular.module('app', []);

var Maincontroller = require('./controllers/MainController');


angular.module('app').controller('MainController', ['$scope', '$http', '$filter', Maincontroller]);