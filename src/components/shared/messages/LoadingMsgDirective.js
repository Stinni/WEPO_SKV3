"use strict";

angular.module("project3App").directive("loadingMessage", function loadingMessage(){
	return {
		restrict: "E",
		templateUrl: "components/shared/messages/loadingMessage.html"
	};
});