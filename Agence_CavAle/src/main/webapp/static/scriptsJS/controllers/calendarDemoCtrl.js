


cal.controller('CalendarDemoCtrl', function ($scope, visiteProvider,$rootScope, $location) {
    'use strict';
    $scope.changeMode = function (mode) {
        $scope.mode = mode;
    };

    $scope.today = function () {
        $scope.currentDate = new Date();
    };

    $scope.isToday = function () {
        var today = new Date(),
            currentCalendarDate = new Date($scope.currentDate);

        today.setHours(0, 0, 0, 0);
        currentCalendarDate.setHours(0, 0, 0, 0);
        return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.loadEvents = function () {
        $scope.eventSource = lecturedesVisite();
    };

    $scope.onEventSelected = function (event) {
        $scope.event = event;
    };

    $scope.onTimeSelected = function (selectedTime) {
        console.log('Selected time: ' + selectedTime);
    };

    function lecturedesVisite(){
    	visiteProvider.findAllVisite2(function(callback) {

    		$rootScope.visites = callback.data;
      	})	
      	
      	var events = [];	
    angular.forEach($rootScope.visites,function(visite, key){
    	
    	
		var date=visite.date;
	
		
		var startTime=new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes());
		var endTime=new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours()+1,date.getMinutes());
		
		events.push({
			title : 'Visite',
			
			 startTime: startTime,
			 endTime: endTime,
			 allDay: false
			
		});
		
		
    })
    return events;	
  
    }
    
    
 //cette fonction etait l'exemple qui permettait la création d'event aléatoir placé dans le calendrier   
    function createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }
})