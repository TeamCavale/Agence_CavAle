/**
 * Provider Agent
 */

app.factory("agentProvider", function($http,$rootScope) {
	var urlglobal = "http://localhost:8080/Agence_CavAle/agent";
	
	
	
	function getAllContratsAgent(agent, callback) {
		$http({
			method : 'POST',
			url : urlglobal + '/contrats',
			data: angular.toJson(agent),
			headers :{
				'Content-Type' : 'application/json'
			}
			
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	return {
		getAllContratsAgent : getAllContratsAgent
	
	}
	
});