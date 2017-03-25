/**
 * 
 */
app.controller("getPropByBICtrl", function($scope, $rootScope, $window,
		$location, getPropByBIProvider) {

	getPropByBIProvider.getAllProp(function(callback) {

		$scope.proprietaire = callback.data;
		
	});
	


	$scope.getProp = function() {

		var id = $scope.propSelectId;
		
		if (id == undefined) {
			id = 0;
		}

		getPropByBIProvider.getPropById(id, function(callback) {
			if (callback != undefined && callback != "" && id!=0) {
				$scope.proprio = callback.data; 
		
				if($scope.proprio!=null || $scope.proprio!=""){
				
				getPropByBIProvider.getAllPropByBI($scope.proprio, function(callback_bi) {
					if (callback_bi != undefined && callback_bi != "") {
						$scope.bienImmo = callback_bi.data;
				
					}
				});}
				
			}
		});
	};


})