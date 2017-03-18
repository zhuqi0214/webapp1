"use strict";
angular.module("app").controller("positionCtrl",["$q","$http","$state","$scope","cache",function($q,$http,$state,$scope,cache){
	$scope.isLogin = !!cache.get("name");
	$scope.message = $scope.isLogin?"投个简历":"去登录";
	function getPosition(){
		var def = $q.defer();
		$http.get('data/position.json?id='+$state.params.id).then(function(resp){
			$scope.position = resp;
			if(resp.posted){
				$scope.message = "已投递";
			}
			
			def.resolve(resp);
		},function(err){
			def.reject(err);
		});
		return def.promise;
	}
	function getCompany(id){
		$http.get('data/company.json?id='+id).then(function(resp){
			$scope.company = resp;
		});
	}
	getPosition().then(function(obj){
		getCompany(obj.data.companyId);
	});
	$scope.go = function(){
		if($scope.message !== '已投递'){
			if($scope.isLogin){
				$http.post("data/handle.json",{
					id:$scope.position.id
				}).success(function(rep){
					console.log(rep);
					$scope.message = "已投递";
				});
			}else{
				$state.go("login");
			}	
		}
	}
}]);
