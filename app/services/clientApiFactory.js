module.exports = function($http, configValue) {

    var _getClients = function () {
        return $http.get(configValue.apiUrl);
    };

    var _postClients = function (client) {
        return $http.post(configValue.apiUrl, client);
    };

    return {
        getClients: _getClients,
        postClients: _postClients
    }
};