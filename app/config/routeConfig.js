module.exports = function($routeProvider) {

    $routeProvider
        .when('/home', {

            templateUrl: 'view/home.html',
            controller: 'MainController',
            resolve: {
                routeInfo: function() {
                    return {
                        'routeName': 'HOME',
                        'navClass': 'navbar-default'
                    };
                }
            }

        })
        .when('/clients', {

            templateUrl: 'view/clients.html',
            controller: 'ClientsController',
            resolve: {
                routeInfo: function() {
                    return {
                        'routeName': 'Lista de clientes',
                        'navClass': 'navbar-inverse'
                    };
                }
            }

        })
        .otherwise({
            redirectTo: '/home'
        });

}