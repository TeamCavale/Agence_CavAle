/**
 * 
 */

app.factory("getCByBIProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle";

	
	function getAllBA(callback) {
	
		$http({
			method : 'GET',
			url : urlglobal + '/bienimmo/achat/getAll'
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});
	}
	function getAllBL(callback) {
		
		$http({
			method : 'GET',
			url : urlglobal + '/bienimmo/location/getAll'
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function getCSById(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/classeStandard/classeStandard/'+id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	function getAllClientByCS(classeStandard, callback) {
		
		$http({
			method :'POST',
			url : urlglobal + '/agent/clientsByClasseStandard',
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
		
	
		getAllClassStand : getAllClassStand,
		getCSById : getCSById,
		getAllClientByCS : getAllClientByCS
	}
})