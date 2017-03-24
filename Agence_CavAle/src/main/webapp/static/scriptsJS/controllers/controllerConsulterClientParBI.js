/**
 * 
 */
app.controller("getClientByBICtrl", function($scope, $rootScope, $window,
		$location, getCByCSProvider) {

	getCByBIProvider.getAllClassStand(function(callback) {

		$scope.classeStandard = callback.data;
		
	});

	$scope.getCS = function() {

		var id = $scope.classStandSelectId;
		console.log("voici id "+id);
		if (id == undefined) {
			id = 0;
		}

		getCByCSProvider.getCSById(id, function(callback) {
			if (callback != undefined && callback != "" && id!=0) {
				$scope.classeStandard = callback.data; 
		
				if($scope.classeStandard!=null || $scope.classeStandard!=""){
				
				getCByCSProvider.getAllClientByCS($scope.classeStandard, function(callback_cs) {
					if (callback_cs != undefined && callback_cs != "") {
						$scope.clients = callback_cs.data;
				
					}
				});}
				
			}
		});
	};

	

})