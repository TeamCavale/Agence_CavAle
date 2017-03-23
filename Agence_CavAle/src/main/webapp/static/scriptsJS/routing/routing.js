/**
 * Fichier pour le routage
 */
app.config(function($routeProvider) {
	$routeProvider.when("/accueil", {
		templateUrl : "pages/listeClients.html",
		controller : "findAllClientCtrl"
	})
	.otherwise({
		redirectTo : "/accueil"
	})
});