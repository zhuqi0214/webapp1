"use strict";
angular.module("app").controller("registerCtrl",["$interval","$state","$scope","$http",function($interval,$state,$scope,$http){
	$scope.submit = function(){
		console.log("aaaa");
		$http.post("data/regist.json",$scope.user).success(function(resp){
			$state.go("login");
		})
	}
	$scope.send = function(){
		$http.get("data/code.json").then(function(resp){
			if(resp.data.state === 1){
				var count = 60;
				$scope.time = "60s";
				var interval = $interval(function(){
					if(count <= 0){
						$interval.cancel(interval);
						$scope.time = "";
						return;
					}
					count--;
					$scope.time = count + "s";
				},1000);
			}
		});
	}
	$scope.name="zhuqi";
}]);
