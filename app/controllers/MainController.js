module.exports = function($scope, $http, $filter, clientApiFactory, clientApiService, configValue) {

    $scope.name = $filter('uppercase')(configValue.appName);
    $scope.day = new Date();
    $scope.total = 27.35;
    $scope.msg = '';
    $scope.clients = [];

    var listClients = function(){
        clientApiService.getClients().then(function(response) {
            // console.log(response.data);
            // console.log(response.status);
            $scope.clients = response.data;
        });
    };
    var addClients = function(client){
        clientApiService.postClients(client).then(function(response){
            // console.log(response);
            // console.log(response.status);
            listClients();
        });
    };
    var destroyClients = function(client){
        client.delete = true;

        clientApiService.postClients(client).then(function(response){
            // console.log(response);
            // console.log(response.status);
        });
    };

    listClients();

    $scope.add = function(client){
        addClients(angular.copy(client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.msg = 'Registro adicionado com sucesso.';

    };
    $scope.edit = function(client){
        $scope.client = client;
        $scope.editing = true;
        $scope.msg = '';
    };
    $scope.save = function() {
        addClients(angular.copy($scope.client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.editing = false;
        $scope.msg = 'Registro alterado com sucesso.';
    };
    $scope.destroy = function(client) {
        $scope.clients.splice($scope.clients.indexOf(client),1);
        destroyClients(client);
        $scope.msg = 'Registro removido com sucesso.';

    };
    $scope.orderBy = function(col){
        $scope.order = col;
        $scope.reverse = !$scope.reverse;
    };
};