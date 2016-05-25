angular
    .module('chatApp')
    .config(routeConfig);

function routeConfig($routeProvider) {
    $routeProvider
    .when('/', {
        template: '<presentation></presentation>'
    })
    .otherwise({
        redirectTo: '/'
    });
}
