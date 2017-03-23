/**
 * Controlleur
 */

app.controller("findAllClientCtrl", function($scope, $rootScope, $window, immoProvider, $location) {
	immoProvider.findAllClients(function(callback) {
		console.log("je suis passe par le ctrl")
		$scope.clients = callback.data;
	});
	
})