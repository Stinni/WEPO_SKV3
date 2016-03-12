"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, AppResource, ProductDlg){
		$scope.product = {
		id: "",
			product: {
				id: "",
				name: "",
				price: "",
				quantitySold: "",
				quantityInStock: "",
				imagePath: ""
			}
		};

	$scope.onOk = function onOk(){
	/*	if($scope.seller.name.length === 0) {
				//error message
			return;
		}*/
		$scope.$close($scope.product);
		
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
}
);