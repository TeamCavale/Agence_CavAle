'use strict';
 
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
        
        $rootScope.agentAuth = {
        		
        		"id" : 1,
        		"nom":"",
        		"mail": "a@a",
        		"mpd":"a",
        		"telephone":""
        }
        
        
 
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.email, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.email, $scope.password);
                    $location.path('/');
                    
                    
//                    agentProvider.getAllAgents(function(callback) {
//                    	var agents = callback.data;
//                    	
//                    	for (var int = 0; int < agents.length; int++) {
//
//                    		if(agent.mail == $scope.email && agent.mail == $scope.password){
//                    			
//                    			$rootScope.agentAuth = agent[int];
//                    			
//                    		}
//		
//            			}
//                    });
                    
                    
                    
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
                
                
            });
        };
    }]);