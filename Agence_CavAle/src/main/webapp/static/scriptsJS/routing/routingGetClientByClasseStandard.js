/**
 * Routing pour les biens immobiliers
 */
app.config(function($routeProvider) {
	$routeProvider.when("/getClientByClasseStandard", {
		templateUrl : "pages/bienImmo_Achat_getAll.html",
		controller : "findAllBIAAcheterCtrl"
	}).otherwise({
		redirectTo : "/accueil"
	})
});
