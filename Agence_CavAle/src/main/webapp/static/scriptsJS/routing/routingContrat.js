/**
 * Routing Gestion Agent
 */

app.config(function($routeProvider) {
	
	$routeProvider.when("/addContrat", {
		
	
		templateUrl : "pages/addContrat.html",
		
		controller : "addContratCtrl"
			
	})
	
	});