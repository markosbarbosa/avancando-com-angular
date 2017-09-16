module.exports = function($scope, $filter, clientApiFactory, configValue, routeInfo, $routeParams) {

    $scope.name = $filter('uppercase')(configValue.appName);
    $scope.day = new Date();
    $scope.total = 27.35;
    $scope.msg = '';
    $scope.clients = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;


    var listClient = function(){
        clientApiFactory.getClient($routeParams.id).then(function(response) {
            // console.log(response.data);
            // console.log(response.status);
            console.log(response);
            $scope.client = response.data;
        });
    };

    listClient();
};