/**
 * Fichier pour le routage
 */
app.config(function($routeProvider) {
	 $routeProvider.when("/getAllClient", {
		templateUrl : "pages/listeClients.html",
		controller : "findAllClientCtrl",
		
	})
	
	.when("/addClient", {
		templateUrl : "pages/addClient.html",
		controller : "addClientCtrl"
	})
	.when("/delClient", {
		templateUrl : "pages/deleteClient.html",
		controller : "deleteClientCtrl"
	})

	.when("/updateClient", {
		templateUrl : "pages/updateClient.html",
		controller : "updateClientCtrl"
	})
	.when("/getbyIdClient", {
		templateUrl : "pages/findClient.html",
		controller : "findClientCtrl"
	})
	
	. when('/login', {
        controller: 'LoginController',
        templateUrl: 'modules/authentication/views/login.html',
        hideMenus: true
    })

    .when('/', {
        controller: 'HomeController',
        templateUrl: 'modules/home/views/home.html'
    })

    .otherwise({ redirectTo: '/login' });

	
	
});