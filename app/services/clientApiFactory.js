module.exports = function($http, configValue) {

    var _getClient = function (id) {
        return $http.get(configValue.apiUrl + '?id=' + id);
    };

    var _getClients = function () {
        return $http.get(configValue.apiUrl);
    };

    var _postClients = function (client) {
        return $http.post(configValue.apiUrl, client);
    };

    return {
        getClient: _getClient,
        getClients: _getClients,
        postClients: _postClients
    }
};