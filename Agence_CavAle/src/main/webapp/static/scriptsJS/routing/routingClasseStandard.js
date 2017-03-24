/**
 * Fichier pour le routage
 */
app.config(function($routeProvider) {
	$routeProvider.when("/getAllClasseStandard", {
		templateUrl : "pages/classeStandardListe.html",
		controller : "findAllClasseStandardCtrl"
	})
	
	.when("/addClasseStandard", {
		templateUrl : "pages/classeStandardAdd.html",
		controller : "addClasseStandardCtrl"
	})
	.when("/delClasseStandard", {
		templateUrl : "pages/classeStandardDelete.html",
		controller : "deleteClasseStandardCtrl"
	})

	.when("/updateClasseStandard", {
		templateUrl : "pages/classeStandardUpdate.html",
		controller : "updateClasseStandardCtrl"
	})
	.when("/getbyIdClasseStandard", {
		templateUrl : "pages/classeStandardFind.html",
		controller : "findClasseStandardCtrl"
	})
	
	.otherwise({
		redirectTo : "/ClasseStandardListe"
	})
});