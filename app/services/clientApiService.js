module.exports = function($http, configValue) {

    this.getClients = function () {
        return $http.get(configValue.apiUrl);
    };

    this.postClients = function (client) {
        return $http.post(configValue.apiUrl, client);
    };

};