/**
 * 
 */
app.controller("getClientByBICtrl", function($scope, $rootScope, $window,
		$location, getCByBIProvider) {

	getCByBIProvider.getAllBA(function(callback) {

		$scope.bienAchat = callback.data;
		
	});
	getCByBIProvider.getAllBL(function(callback) {

		$scope.bienLocation = callback.data;
		
	});


	$scope.getBA = function() {

		var id = $scope.bASelectId;
		console.log("voici id "+id);
		if (id == undefined) {
			id = 0;
		}

		getCByBIProvider.getCSById(id, function(callback) {
			if (callback != undefined && callback != "" && id!=0) {
				$scope.classeStandard = callback.data; 
		
				if($scope.classeStandard!=null || $scope.classeStandard!=""){
				
					getCByBIProvider.getAllClientByCS($scope.classeStandard, function(callback_cs) {
					if (callback_cs != undefined && callback_cs != "") {
						$scope.clients = callback_cs.data;
				
					}
				});}
				
			}
		});
	};

	$scope.getBL = function() {

		var id = $scope.bLSelectId;
		console.log("voici id "+id);
		if (id == undefined) {
			id = 0;
		}

		getCByBIProvider.getCSById(id, function(callback) {
			if (callback != undefined && callback != "" && id!=0) {
				$scope.classeStandard = callback.data; 
		
				if($scope.classeStandard!=null || $scope.classeStandard!=""){
				
					getCByBIProvider.getAllClientByCS($scope.classeStandard, function(callback_cs) {
					if (callback_cs != undefined && callback_cs != "") {
						$scope.clients = callback_cs.data;
				
					}
				});}
				
			}
		});
	};

})