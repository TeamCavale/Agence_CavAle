/**
 * 
 */

app.factory("propProvider", function($http) {
	var urlglobal = "http://localhost:8080/Agence_CavAle";

	function findAllProp(callback) {
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

	function findDetailsProp(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/proprietaire/get/' + id
		}).then(function successCallback(response) {
			console.log(response.data);
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}

	function addProp(prop, callback) {
		$http({
			method : 'POST',
			url : urlglobal + '/proprietaire/add',
			data : angular.toJson(prop),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}

	function updateProp(prop, callback) {
		$http({
			method : 'PUT',
			url : urlglobal + '/proprietaire/upd',
			data : angular.toJson(prop),
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}

	function delProp(id, callback) {
		$http({
			method : 'GET',
			url : urlglobal + '/proprietaire/del/' + id
		}).then(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			console.log("erreur : " + response.statusText);
		});

	}

	return {
		findAllProp : findAllProp,
		findDetailsProp : findDetailsProp,
		addProp : addProp,
		updateProp : updateProp,
		delProp : delProp
	}
})