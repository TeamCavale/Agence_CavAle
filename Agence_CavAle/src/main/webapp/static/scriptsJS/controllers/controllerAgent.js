/**
 * Controleur Agent
 */

app.controller("allContratsAgentCtrl", 
		function($scope, $rootScope, $window, agentProvider, $location) {
	
	var agent = {id:1,
				 mail:"a@a",
				 mdp:"a",
				 nom:"a",
				 telephone:"0515515"
				}  //$rootScope.agentAuth;
	
	
	agentProvider.getAllContratsAgent(agent, function(callback) {
		
		$scope.contrats = callback.data;
		
	});
	
	
});