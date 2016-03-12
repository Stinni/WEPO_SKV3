"use strict";

angular.module("project3App").controller("ProductController",

function ProductController($scope, $routeParams, AppResource){

	var sellerid = parseInt($routeParams.sid); 

	AppResource.getSellerProducts(sellerid).success (function(product){
		$scope.products = product;
	});
});

