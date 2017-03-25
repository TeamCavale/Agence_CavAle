/**
 * Routing pour les biens immobiliers
 */
app.config(function($routeProvider) {
	$routeProvider.when("/getPropByBI", {
		templateUrl : "pages/getPropByBI.html",
		controller : "getPropByBICtrl"
	}).otherwise({
		redirectTo : "/accueil"
	})
});
