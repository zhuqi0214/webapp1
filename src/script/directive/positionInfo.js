"use strict";
angular.module("app").directive("appPositionInfo",["$http",function($http){
	return{
		restrict:"A",
		replace:true,
		templateUrl:'view/template/positionInfo.html',
		scope:{
			isLogin:"=",
			pos:"="
		},
		link:function(scope){
			scope.$watch("pos",function(newVal){
				if(newVal){
					scope.isActive = scope.pos.select||false;
					scope.imagePath = scope.isActive?"image/star-active.png":"image/star.png";	
				}
			});
			scope.favorite = function(pos){
				$http.post("data/favorite.json",{
					id:pos.id,
					select:pos.select
				}).success(function(res){
					scope.isActive = !scope.isActive;
					scope.imagePath = scope.isActive?"image/star-active.png":"image/star.png";
				});
			}
		}
	}
}]);