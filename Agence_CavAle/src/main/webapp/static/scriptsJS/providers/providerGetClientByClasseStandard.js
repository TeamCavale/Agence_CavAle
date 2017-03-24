/**
 * 
 */

app.factory("getCByCSProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle";

	function findAllBiensImmoAchat(callback) {
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

	function findDetailsBiensImmoAchat(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/bienimmo/achat/getById/' + id
		}).then(function successCallback(response) {
			console.log(response.data);
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

	function getAllClassStand(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/classeStandard/classeStandards'
		}).then(function successCallback(response) {
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

	return {
		findAllBiensImmoAchat : findAllBiensImmoAchat,
		findDetailsBiensImmoAchat : findDetailsBiensImmoAchat,
		getAllProp : getAllProp,
		getAllClient : getAllClient,
		getAllClassStand : getAllClassStand,
		getCSById : getCSById
	}
})