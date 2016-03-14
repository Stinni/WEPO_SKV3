"use strict";

describe("SellersController", function() {

	var theController, scope;

	beforeEach(module("project3App"));

	describe("when everything should be fine and dandy", function() {

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			theController = $controller("SellersController", {
				$scope: scope
			});
		}));

		it("should have the onAddSeller function", function() {
			expect(scope.onAddSeller).toBeDefined();
		});
		//it("should not accept nonexisting user", function() {
		//	var username = "Ragnar";
		//	var result = AppResource.upDateSeller(1);
		//	expect(result).toBeFalsy();
		//});
	});
});
/*
$scope.isLoading
	$scope.onAddSeller
	$scope.onEditSeller
*/