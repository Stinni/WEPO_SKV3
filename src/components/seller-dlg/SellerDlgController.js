"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, AppResource, SellerDlg){

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
}
);