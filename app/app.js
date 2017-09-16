require('angular');

angular.module('app', []);

var Maincontroller = require('./controllers/MainController');


angular.module('app').controller('MainController', ['$scope', '$http', Maincontroller]);