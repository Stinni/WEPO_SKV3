"use strict";

angular.module("project3App").controller("LanguageController",["$scope", "$translate",
 function LanguageController($scope, $translate, $translateProvider) {
	 
	$scope.switchLanguage = function (languageKey) {	
		$translateProvider.use(languageKey);
	 };
 }]);