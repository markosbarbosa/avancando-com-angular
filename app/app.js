require('angular');
require('angular-route');
require('./locale/angular-locale_pt-br');


var routeConfig = require('./config/routeConfig');
var configConstant = require('./config/configConstant');
var configValue = require('./config/configValue');
var configBonusProvider = require('./config/configBonusProvider');
var bonusGenerator = require('./services/bonusGeneratorProvider');

var clientApiFactory = require('./services/clientApiFactory');
var clientApiService = require('./services/clientApiService');

var Maincontroller = require('./controllers/MainController');
var ClientsController = require('./controllers/ClientsController');
var ClientController = require('./controllers/ClientController');
var maskTel = require('./directives/maskTel');
var alertMsg = require('./directives/alertMsg');


angular.module('app', ['ngRoute']);
angular.module('app').constant('configConstant', configConstant);
angular.module('app').value('configValue', configValue);
angular.module('app').provider('bonusGenerator', [bonusGenerator]);

angular.module('app').config(['bonusGeneratorProvider', 'configConstant', configBonusProvider]);
angular.module('app').config(['$routeProvider', routeConfig]);


angular.module('app').factory('clientApiFactory', ['$http', 'configValue', clientApiFactory]);
angular.module('app').service('clientApiService', ['$http', 'configValue', clientApiService]);
angular.module('app').directive('maskTel', [maskTel]);
angular.module('app').directive('alertMsg', [alertMsg]);


angular.module('app').controller('MainController', [
    '$scope', '$filter', 'configValue', 'routeInfo', Maincontroller
]);

angular.module('app').controller('ClientsController', [
    '$scope', '$http', '$filter', 'clientApiFactory',
    'clientApiService', 'configValue', 'bonusGenerator', 'routeInfo', ClientsController
]);

angular.module('app').controller('ClientController', [
    '$scope', '$filter', 'clientApiFactory', 'configValue', 'routeInfo', '$routeParams', ClientController
]);