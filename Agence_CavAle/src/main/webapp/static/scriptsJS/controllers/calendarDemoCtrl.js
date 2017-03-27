app.controller('CalendarDemoCtrl', function($scope, visiteProvider, $rootScope,
		$location) {
	'use strict';
	
	$scope.changeMode = function(mode) {
		$scope.mode = mode;
	};

	$scope.today = function() {
		$scope.currentDate = new Date();
	};

	$scope.isToday = function() {
		var today = new Date(), currentCalendarDate = new Date(
				$scope.currentDate);

		today.setHours(0, 0, 0, 0);
		currentCalendarDate.setHours(0, 0, 0, 0);
		return today.getTime() === currentCalendarDate.getTime();
	};

	$scope.loadEvents = function() {
		$scope.eventSource = lecturedesVisite();
	};

	$scope.onEventSelected = function(event) {
		$scope.event = event;
	};

	$scope.onTimeSelected = function(selectedTime) {
		console.log('Selected time: ' + selectedTime);
	};

	function lecturedesVisite() {
		var events = [];
		
		visiteProvider.findAllVisite2(function(callback) {
			if (callback != undefined && callback != "") {
				$rootScope.visites = callback.data;

				
				if ($rootScope.visites == undefined) {
					$rootScope.visites = [];
				}
				// methode supprimer avec un lien
				$scope.deleteLien = function(id) {
					visiteProvider.deleteVisite(id, function(callback) {
						if (callback != undefined && callback != "") {

							visiteProvider.findAllVisite(function(callback_visite) {
								if (callback_visite != undefined
										&& callback_visite != "") {
									$scope.visites = callback_visite.data;
									$location.path("getAllVisite")
								}
							});
						}
					})
				}
				// declarer la visite dans le rootscope
				$rootScope.visiteForm = {
					id : undefined,
					date : "",
					client : null,
					agent : null,
					bienALouer : null,
					bienAAcheter : null
				}
				// appelé la methode du provider avec le lien de l'index
				$scope.updateLien = function(visite) {
					$rootScope.visiteForm.id = visite.id;
					$rootScope.visiteForm.date = visite.date;
					$rootScope.visiteForm.client = visite.client;
					$rootScope.visiteForm.agent = visite.agent;
					$rootScope.visiteForm.bienALouer = visite.bienALouer;
					$rootScope.visiteForm.bienAAcheter = visite.bienAAcheter;
					$location.path("updateVisite")
				}		
				

				$rootScope.visites.forEach(function(visite) {

					var date = new Date(visite.date);
					var client = visite.client;
					var bienALouer = visite.bienALouer;
					var bienAAcheter = visite.bienAAcheter;
					
					var startTime = new Date(date.getFullYear(), date
							.getMonth(), date.getDate(), date.getHours(), date
							.getMinutes());
					
					var endTime = new Date(date.getFullYear(), date.getMonth(),
							date.getDate(), date.getHours() + 1, date
									.getMinutes());
					

					events.push({
						title : 'Visite',
						startTime : startTime,
						endTime : endTime,
						client : client,
						bienALouer : bienALouer,
						bienAAcheter : bienAAcheter,
						allDay : false

					});
				})
			}
		})
		return events;

	}

	// cette fonction etait l'exemple qui permettait la création d'event
	// aléatoir placé dans le calendrier
//	function createRandomEvents() {
//		var events = [];
//		for (var i = 0; i < 50; i += 1) {
//			var date = new Date();
//			var eventType = Math.floor(Math.random() * 2);
//			var startDay = Math.floor(Math.random() * 90) - 45;
//			var endDay = Math.floor(Math.random() * 2) + startDay;
//			var startTime;
//			var endTime;
//			if (eventType === 0) {
//				startTime = new Date(Date.UTC(date.getUTCFullYear(), date
//						.getUTCMonth(), date.getUTCDate() + startDay));
//				if (endDay === startDay) {
//					endDay += 1;
//				}
//				endTime = new Date(Date.UTC(date.getUTCFullYear(), date
//						.getUTCMonth(), date.getUTCDate() + endDay));
//				events.push({
//					title : 'All Day - ' + i,
//					startTime : startTime,
//					endTime : endTime,
//					allDay : true
//				});
//			} else {
//				var startMinute = Math.floor(Math.random() * 24 * 60);
//				var endMinute = Math.floor(Math.random() * 180) + startMinute;
//				startTime = new Date(date.getFullYear(), date.getMonth(), date
//						.getDate()
//						+ startDay, 0, date.getMinutes() + startMinute);
//				endTime = new Date(date.getFullYear(), date.getMonth(), date
//						.getDate()
//						+ endDay, 0, date.getMinutes() + endMinute);
//				events.push({
//					title : 'Event - ' + i,
//					startTime : startTime,
//					endTime : endTime,
//					allDay : false
//				});
//			}
//		}
//		return events;
//	}
})