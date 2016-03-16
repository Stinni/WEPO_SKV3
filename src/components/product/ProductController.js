"use strict";

angular.module("project3App").controller("ProductController", ["$scope", "$routeParams", "AppResource", "ProductDlg", "centrisNotify",
function ProductController($scope, $routeParams, AppResource, ProductDlg, centrisNotify){

	var sellerid = parseInt($routeParams.sid); 

	AppResource.getSellerProducts(sellerid).success (function(products){
		$scope.products = products;
	});

	$scope.onTopProduct = function onTopProduct() {
		AppResource.getSellerProducts(sellerid).success(function(products) {
			products.sort(function(a, b) {
				return parseFloat(b.quantitySold) - parseFloat(a.quantitySold);
			});
			$scope.products = products.slice(0, 10);
		});
	};

	$scope.onAllProduct = function onAllProduct() {
		AppResource.getSellerProducts(sellerid).success (function(products) {
			$scope.products = products;
		});
	};



	$scope.onAddProduct = function onAddProduct() {
		ProductDlg.show().then(function(product){
			AppResource.getSellerProducts(sellerid).success(function(products){
				var product_found = false;
				for (var i = 0; i < products.length; i++) {
					if(products[i].name === product.name) {
						product_found = true;
					}
				}
				if(!product_found) {

					AppResource.addSellerProduct(sellerid, product).success(function(product){
						product.quantitySold = 0;
						var newproduct = product;
						$scope.products.push(newproduct);
						centrisNotify.success("product.Messages.SaveSucceeded");
					}).error(function() {
						centrisNotify.error("product.Message.SaveFailed");
					});
				} else {
					AppResource.updateProduct(sellerid, product).success(function(product) {
						centrisNotify.success("product.Messages.UpdateSucceeded");
					}).error(function() {
						centrisNotify.error("product.Messages.UpdateFailed");
					});
				}
			});
		});
	};
}]);