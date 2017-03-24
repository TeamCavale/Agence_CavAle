/**
 * 
 */
app
		.controller(
				"findAllBIAAcheterCtrl",
				function($scope, $rootScope, $window, $location,
						bienImmoAchatProvider) {
					bienImmoAchatProvider.findAllBiensImmoAchat(function(
							callback) {
						if (callback != undefined && callback != "") {
							$scope.biAchat = callback.data;
						}
					});

					$scope.getDetail = function(id, callback) {

						bienImmoAchatProvider
								.findDetailsBiensImmoAchat(
										id,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												$scope.bienImmo = callback.data;
											}
										})
					}
				})
		.controller(
				"findBIAAcheterCtrl",
				function($scope, $rootScope, $window, $location,
						bienImmoAchatProvider) {

					$scope.getBI = function() {
						var id = $scope.id_bi;
						bienImmoAchatProvider
								.findDetailsBiensImmoAchat(
										id,
										function(callback) {
											if (callback != undefined
													&& callback != "") {
												$scope.bienImmo = callback.data;
											}
										})
					}
				})