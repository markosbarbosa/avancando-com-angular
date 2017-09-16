module.exports = function($scope, $filter, configValue, routeInfo) {

    $scope.name = $filter('uppercase')(configValue.appName);
    $scope.day = new Date();
    $scope.total = 27.35;
    $scope.msg = '';
    $scope.clients = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;


};