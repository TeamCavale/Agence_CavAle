/**
 * Routing Gestion Agent
 */

app.config(function($routeProvider) {
	
	$routeProvider.when("/addContrat", {
		
	
		templateUrl : "pages/contratAdd.html",
		
		controller : "addContratCtrl"
			
	}).when("/updateContrat/:idContrat", {
		
		templateUrl : "pages/biensByClasseStandard.html",
		
		controller : "biensByClasseStandardCtrl"
			
	}).otherwise({
		
		redirectTo : "/accueil"
			
	})
	
	
	
	});