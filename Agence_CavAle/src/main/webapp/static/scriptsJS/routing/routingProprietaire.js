/**
 * Routing pour les biens immobiliers
 */
app.config(function($routeProvider) {
	$routeProvider.when("/getAllProprietaire", {
		templateUrl : "pages/proprietaireGetAll.html",
		controller : "findAllPropCtrl"
	}).when("/getbyIdProprietaire", {
		templateUrl : "pages/proprietaireFind.html",
		controller : "findPropCtrl"
	}).when("/addProprietaire", {
		templateUrl : "pages/proprietaireAdd.html",
		controller : "addPropCtrl"
	}).when("/updateProprietaire/:idProp", {
		templateUrl : "pages/proprietaireAdd.html",
		controller : "updatePropCtrl"
	}).otherwise({
		redirectTo : "/accueil"
	})
});
