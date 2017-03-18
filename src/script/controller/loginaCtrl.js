"use strict";
angular.module("app").controller("loginaCtrl",["cache","$http","$scope","$state",function(cache,$http,$scope,$state){
	$scope.name = "zhuqi";
	$scope.submit = function(){
		console.log("aaa");
		$http.post("data/login.json",$scope.user).success(function(resp){
			cache.put("id",resp.id);
			cache.put("name",resp.name);
			cache.put("image",resp.image);
			$state.go("main");
		})
	}
}]);
angular.module("app").controller("loginCtrl",["$scope",function($scope){
	$scope.name = "zhuqi";
	$scope.hhe = "nna";
}]);

	