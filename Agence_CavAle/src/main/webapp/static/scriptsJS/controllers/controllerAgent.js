/**
 * Controleur Agent
 */

app
		.controller(
				"allContratsAgentCtrl",
				function($scope, $rootScope, $window, agentProvider, $location) {

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

										$scope.contrats = listeContrats;

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
															+ ((jvDate <= jsDate && jvDate >= (jsDate - (jsJour * 24 * 3600 * 1000))) 
																	|| listeContrats[i].bienALouer != null));

											// test si l'achat a été effectué
											// dans le mois ou si c'est un loyer
											if ((jvDate <= jsDate && jvDate >= (jsDate - (jsJour * 24 * 3600 * 1000)))
													|| listeContrats[i].bienALouer != null) {
												total += listeContrats[i].prixEffectif;
											}
										}

										console.log(total);

										$scope.chiffreAffaire = total;

										$scope.delContrat = function(id, callback) {

											agentProvider.delContratAgent(
													id, function(callback)
													 {
																if (callback != undefined
																		&& callback != "") {
																	agentProvider
																			.getAllContratsAgent(agent, function(
																					callback) {
																				if (callback != undefined
																						&& callback != "") {
																					$scope.contrats = callback.data;
																				}
																			});
																}
															});

										};

									});

				});