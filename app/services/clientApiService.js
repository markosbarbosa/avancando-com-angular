module.exports = function($http) {

    var _getClients = function () {
        return $http.get('http://localhost:8080');
    };

    var _postClients = function (client) {
        return $http.post('http://localhost:8080', client);
    };

    return {
        getClients: _getClients,
        postClients: _postClients
    }
};