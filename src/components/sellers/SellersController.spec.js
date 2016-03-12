"use strict";

describe("SellersController", function(AppResource) {
	
	beforeEach(function(){	
		});
	
	it("should not accept nonexisting user", function(){
		var username = "Ragnar";

		var result = AppResource.upDateSeller(1);

		expect(result).toEqual(false);
	});

});



/*
	it("should be ...", function(){

	});

	it("should be ...", function(){

	});
	
	it("should be ...", function(){

	});
	
	it("should be ...", function(){

	});*/
