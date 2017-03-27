/**
 * Provider Agent
 */

app.factory("contratProvider", function($http,$rootScope) {
	var urlglobal = "http://localhost:8080/Agence_CavAle";
	
	
	
	function addContrat(contratForm,callback) {
		$http({
			method : 'POST',
			url : urlglobal + '/contrat/add',
			data: angular.toJson(contratForm),
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
	
	
	function getClientById(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/client/client/' + id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function getAllClient(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/client/clients'
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	
	function getBienAAcheterById(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/bienimmo/achat/getById/' + id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function getAllBienAAcheter(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/bienimmo/achat/getAll'
		}).then(function successCallback(response) {
			console.log("provider");
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function getBienALouerById(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/bienimmo/location/getById/' + id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function getAllBienALouer(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/bienimmo/location/getAll'
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function updContrat(contratForm,callback) {
		$http({
			method : 'POST',
			url : urlglobal + '/contrat/update',
			data: angular.toJson(contratForm),
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
	
	function getContratFromView(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/contrat/contrat/' + id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	
	
	return {
		addContrat : addContrat,
		getAllClient : getAllClient,
		getClientById : getClientById,
		getBienAAcheterById : getBienAAcheterById,
		getAllBienAAcheter : getAllBienAAcheter,
		getAllBienALouer : getAllBienALouer,
		getBienALouerById : getBienALouerById,
		updContrat : updContrat
	}
	
});