"use strict";

angular.module("project3App").controller("SellerDlgController", ["$scope", "AppResource",
function SellerDlgController($scope, AppResource){

	console.log("SellerDlgController called");

	$scope.seller = {
		id:"",
		name: "",
		category: "",
		imagePath: ""
	};

	$scope.onOk = function onOk(){
	/*	if($scope.seller.name.length === 0) {
				//error message
			return;
		}*/
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
}]);