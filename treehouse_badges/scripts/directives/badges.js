angular.module('badgesApp')
.directive('badges', function(){
	return {
		templateUrl: 'templates/badges.html',
		controller: 'mainCtrl',
		replace: true
	};
});