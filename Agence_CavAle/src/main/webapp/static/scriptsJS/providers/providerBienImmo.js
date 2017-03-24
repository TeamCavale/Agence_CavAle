/**
 * 
 */

app.factory("bienImmoAchatProvider", function($http) {
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

	function addBienImmoAchat(bi, callback) {
		$http({
			method : 'POST',
			url : urlglobal + '/bienimmo/achat/add',
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
	
	function updateBienImmoAchat(bi, callback) {
		$http({
			method : 'PUT',
			url : urlglobal + '/bienimmo/achat/update',
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

	function delBIAchat(id, callback) {
		$http({
			method : 'DELETE',
			url : urlglobal + '/bienimmo/achat/del/' + id
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
		getCSById : getCSById,
		getClientById : getClientById,
		getPropById : getPropById,
		addBienImmoAchat : addBienImmoAchat,
		updateBienImmoAchat : updateBienImmoAchat,
		delBIAchat : delBIAchat
	}
})