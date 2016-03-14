"use strict";

angular.module("project3App").directive("errorMessage", function errorMessage(){
	return {
		restrict: "E",
		templateUrl: "components/shared/messages/errorMessage.html"
	};
});