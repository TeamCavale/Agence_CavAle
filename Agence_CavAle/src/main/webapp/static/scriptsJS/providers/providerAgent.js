/**
 * Provider Agent
 */

app.factory("agentProvider", function($http,$rootScope) {
	var urlglobal = "http://localhost:8080/Agence_CavAle";
	
	
	
	function getAllContratsAgent(agent, callback) {
		$http({
			method : 'POST',
			url : urlglobal + '/agent/contrats',
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
	
	function delContratAgent(id, callback){
		
		$http({
			method : 'GET',
			url : urlglobal + '/contrat/del/' + id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});
		
	};
	
	function getAllClassesStandard(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/classeStandard/classeStandards'
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function getClasseStandardById(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/classeStandard/classeStandard/' + id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	
	
	return {
		getAllContratsAgent : getAllContratsAgent,
		delContratAgent : delContratAgent,
		getAllClassesStandard : getAllClassesStandard,
		getClasseStandardById : getClasseStandardById
	
	}
	
});