/**
 * 
 */

app.factory("getPropByBIProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle";

	
	function getAllProp(callback) {
	
		$http({
			method : 'GET',
			url : urlglobal + '/proprietaire/all'
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});
	}
	
	
	function getPropById(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/proprietaire/get/'+id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	function getAllPropByBI(classeStandard, callback) {
		
		$http({
			method :'POST',
			url : urlglobal + '/agent/biensByProprietaire',
			data: angular.toJson(classeStandard),
			headers :{
				'Content-Type' : 'application/json'
			}
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	return {
		
	
		getAllProp : getAllProp,
		getPropById : getPropById,
		getAllPropByBI : getAllPropByBI,
		
	}
})