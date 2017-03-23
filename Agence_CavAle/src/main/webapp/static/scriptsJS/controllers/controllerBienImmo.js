/**
 * 
 */
app.controller("findAllBIAAcheterCtrl", function($scope, $rootScope, $window, $location, bienImmoAchatProvider) {
	bienImmoAchatProvider.findAllBiensImmo(function(callback) {
		$scope.biAchat = callback.data;
	})
})