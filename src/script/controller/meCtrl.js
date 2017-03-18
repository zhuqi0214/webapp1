"use strict";
angular.module("app").controller("meCtrl",["$state","cache","$scope",function($state,cache,$scope){
	if(cache.get("name")){
		$scope.name = cache.get('name');
		$scope.image = cache.get("image");
	}
	$scope.logout = function(){
		cache.remove('id');
		cache.remove('name');
		cache.remove('iamge');
		$state.go('main');
	}
}]);
