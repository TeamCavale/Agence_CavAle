/**
 * 
 */

app.factory("bienImmoLocationProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle";

	function findAllBiensImmoLocation(callback) {
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

	function findDetailsBiensImmoLocation(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/bienimmo/location/getById/' + id
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}

	function getAllProp(callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/proprietaire/all'
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
			url : urlglobal + '/classeStandard/classeStandard/' + id
		}).then(function successCallback(response) {
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

	function getPropById(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/proprietaire/get/' + id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}

	function addBienImmoLocation(bi, callback) {
		$http({
			method : 'POST',
			url : urlglobal + '/bienimmo/location/add',
			data : angular.toJson(bi),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}
	
	function updateBienImmoLocation(bi, callback) {
		$http({
			method : 'PUT',
			url : urlglobal + '/bienimmo/location/update',
			data : angular.toJson(bi),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}

	function delBILocation(id, callback) {
		$http({
			method : 'DELETE',
			url : urlglobal + '/bienimmo/location/del/' + id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}

	return {
		findAllBiensImmoLocation : findAllBiensImmoLocation,
		findDetailsBiensImmoLocation : findDetailsBiensImmoLocation,
		getAllProp : getAllProp,
		getAllClient : getAllClient,
		getAllClassStand : getAllClassStand,
		getCSById : getCSById,
		getClientById : getClientById,
		getPropById : getPropById,
		addBienImmoLocation : addBienImmoLocation,
		updateBienImmoLocation : updateBienImmoLocation,
		delBILocation : delBILocation
	}
})