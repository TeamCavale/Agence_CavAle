/**
 * Routing Gestion Agent
 */

app.config(function($routeProvider) {
	
	$routeProvider.when("/getAllContratsAgent", {
		
	
		templateUrl : "pages/agentAllContrats.html",
		
		controller : "allContratsAgentCtrl"
			
	})
	
	});