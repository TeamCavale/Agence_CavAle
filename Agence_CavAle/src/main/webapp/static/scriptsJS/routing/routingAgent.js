/**
 * Routing Gestion Agent
 */

app.config(function($routeProvider) {
	
	$routeProvider.when("/getAllContratsAgent", {
		
	
		templateUrl : "pages/agentAllContrats.html",
		
		controller : "allContratsAgentCtrl"
			
	}).when("/biensByClasseStandard", {
		
		templateUrl : "pages/biensByClasseStandard.html",
		
		controller : "biensByClasseStandardCtrl"
			
	}).otherwise({
		
		redirectTo : "/accueil"
			
	})
	
	});