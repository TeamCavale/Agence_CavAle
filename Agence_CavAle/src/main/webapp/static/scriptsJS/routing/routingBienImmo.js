/**
 * Routing pour les biens immobiliers
 */
app.config(function($routeProvider) {
	$routeProvider.when("/getAllBienAAcheter", {
		templateUrl : "pages/bienImmo_Achat_getAll.html",
		controller : "findAllBIAAcheterCtrl"
	})
	.otherwise({
		redirectTo : "/accueil"
	})
});