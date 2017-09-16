require('angular');
require('./locale/angular-locale_pt-br');


var clientApiFactory = require('./services/clientApiFactory');
var clientApiService = require('./services/clientApiService');
var Maincontroller = require('./controllers/MainController');
var maskTel = require('./directives/maskTel');
var alertMsg = require('./directives/alertMsg');


angular.module('app', []);
angular.module('app').factory('clientApiFactory', ['$http', clientApiFactory]);
angular.module('app').service('clientApiService', ['$http', clientApiService]);
angular.module('app').directive('maskTel', [maskTel]);
angular.module('app').directive('alertMsg', [alertMsg]);
angular.module('app').controller('MainController', ['$scope', '$http', '$filter', 'clientApiFactory', 'clientApiService', Maincontroller]);