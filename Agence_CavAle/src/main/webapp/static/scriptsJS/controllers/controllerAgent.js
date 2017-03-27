/**
 * Controleur Agent
 */

app
		.controller(
				"allContratsAgentCtrl",
				function(contratProvider, $scope, $rootScope, $window,
						agentProvider, $location) {

					var agent = {
						id : 1,
						mail : "a@a",
						mdp : "a",
						nom : "a",
						telephone : "0515515"
					} // $rootScope.agentAuth;

					agentProvider
							.getAllContratsAgent(
									agent,
									function(callback) {

										var listeContrats = callback.data;
										
										$scope.listeContratsView = [];

										contratProvider
												.getAllBienAAcheter(function(
														callback) {
													if (callback != undefined
															&& callback != "") {
														
														$scope.listeBienAAcheter = callback.data;
														console.log("coucou" +callback.data)

														var listeBAA = $scope.listeBienAAcheter;
														console.log(listeBAA);

														for (var i = 0; i < listeBAA.length; i++) {

															for (var j = 0; j < listeContrats.length; j++) {

																if ($scope.listeBienAAcheter[i].contrat != null) {

																	if ($scope.listeBienAAcheter[i].contrat.id == listeContrats[j].id) {

																		listeContrats[j].bienAAcheter = $scope.listeBienAAcheter[i];
																		$scope.listeContratsView[i] = listeContrats[j];

																	}
																}
															}
														}
														console
																.log($scope.listeContratsView);

														contratProvider
																.getAllBienALouer(function(
																		callback) {
																	if (callback != undefined
																			&& callback != "") {
																		$scope.listeBienALouer = callback.data;
																		
																		console.log("coucou2" +callback.data)

																		var listeBAL = $scope.listeBienALouer;
																		console
																				.log(listeBAL);

																		for (var i = 0; i < listeBAL.length; i++) {

																			for (var j = 0; j < listeContrats.length; j++) {

																				if ($scope.listeBienALouer[i].contrat != null) {

																					if ($scope.listeBienALouer[i].contrat.id == listeContrats[j].id) {

																						listeContrats[j].bienALouer = $scope.listeBienALouer[i];
																						$scope.listeContratsView[i
																								+ listeBAA.length] = listeContrats[j];

																					}
																				}
																			}
																		}
																		console
																		.log($scope.listeContratsView);
																	}
																});
													}
												});

										var total = 0;

										var date = new Date();

										// date en milliseconde comparable avec
										// les Dates de Java
										var jsDate = date.getTime();

										// recup le jour du mois
										var jsJour = date.getDate();
										console.log(date);
										console.log(jsJour);
										console.log(jsDate);

										for (var i = 0; i < listeContrats.length; i++) {

											var jvDate = listeContrats[i].dateAchat;

											console.log(jvDate);
											console
													.log("cond="
															+ ((jvDate <= jsDate && jvDate >= (jsDate - (jsJour * 24 * 3600 * 1000))) || listeContrats[i].bienALouer != null));

											// test si l'achat a été effectué
											// dans le mois ou si c'est un loyer
											if ((jvDate <= jsDate && jvDate >= (jsDate - (jsJour * 24 * 3600 * 1000)))
													|| listeContrats[i].bienALouer != null) {
												total += listeContrats[i].prixEffectif;
											}
										}

										console.log(total);

										$scope.chiffreAffaire = total;

										$scope.delContrat = function(id,
												callback) {

											agentProvider
													.delContratAgent(
															id,
															function(callback) {
																if (callback != undefined
																		&& callback != "") {
																	agentProvider
																			.getAllContratsAgent(
																					agent,
																					function(
																							callback) {
																						if (callback != undefined
																								&& callback != "") {
																							$scope.listeContratsView = callback.data;
																						}
																					});
																}
															});

										};

									});

				})
		.controller(
				"biensByClasseStandardCtrl",
				function($scope, $rootScope, $window, agentProvider, $location,
						contratProvider) {
					$scope.classeStandard = {
						"id" : 0,
						"code" : "",
						"typeOffre" : "",
						"prixMax" : 0,
						"superficieMin" : "",
						"typeBien" : null,
						"listeClients" : [],
						"listeBiensAAcheter" : [],
						"listeBiensALouer" : []
					};

					agentProvider.getAllClassesStandard(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeCS = callback.data;
						}
					});

					contratProvider.getAllBienALouer(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeBienALouer = callback.data;
						}
					});

					contratProvider.getAllBienAAcheter(function(callback) {
						if (callback != undefined && callback != "") {
							$scope.listeBienAAcheter = callback.data;
						}
					});

					$scope.getCS = function() {

						var id = $scope.classeStandardSelectedId;
						if (id == undefined) {
							id = 0;
						}

						agentProvider.getClasseStandardById(id, function(
								callback) {
							if (callback != undefined && callback != "") {
								$scope.classeStandard = callback.data;
							}
						});
					};

					$scope.bienByCS = function() {
						console.log("caca");

						$scope.listeBAA = [];
						$scope.listeBAL = [];

						for (var int = 0; int < $scope.listeBienAAcheter.length; int++) {
							console.log(int)
							console.log($scope.listeBienAAcheter[int].id);
							console.log($scope.classeStandard.id);
							if ($scope.listeBienAAcheter[int].classeStandard.id == $scope.classeStandardSelectedId)

								$scope.listeBAA[int] = $scope.listeBienAAcheter[int];

						}
						for (var int = 0; int < $scope.listeBienALouer.length; int++) {
							console.log(int)
							console.log($scope.listeBienALouer[int].id);
							console.log($scope.classeStandardSelectedId);
							if ($scope.listeBienALouer[int].classeStandard.id == $scope.classeStandardSelectedId)

								$scope.listeBAL[int] = $scope.listeBienALouer[int];

						}

					};

					$scope.delBA = function(id, callback) {
						bienImmoAchatProvider.delBIAchat(id,
								function(callback) {
									// if (callback != undefined
									// && callback != "") {
									// }
								});
					};

					$scope.delBL = function(id, callback) {
						bienImmoLocationProvider.delBILocation(id, function(
								callback) {
							// if (callback != undefined
							// && callback != "") {
							// }
						});
					};

				});