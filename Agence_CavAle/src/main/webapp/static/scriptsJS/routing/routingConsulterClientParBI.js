/**
 * Routing pour les biens immobiliers
 */
app.config(function($routeProvider) {
	$routeProvider.when("/getClientByBI", {
		templateUrl : "pages/getClientByBI.html",
		controller : "getClientByBICtrl"
	}).otherwise({
		redirectTo : "/accueil"
	})
});
