/**
 * Routing pour les biens immobiliers
 */
app.config(function($routeProvider) {
	$routeProvider.when("/getClientByClasseStandard", {
		templateUrl : "pages/getClientByClasseStandard.html",
		controller : "getClientByCSCtrl"
	}).otherwise({
		redirectTo : "/accueil"
	})
});
