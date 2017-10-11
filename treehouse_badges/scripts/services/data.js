angular.module("badgesApp")
.factory('dataFactory', function($http){

	function getBadges(username) 
	{
		return $http({
			method: 'GET',
			url: 'https://teamtreehouse.com/' + username + '.json'
			//url: 'https://tecnomacs.com/'
		});
	}

	return {
		getBadges : getBadges
	}

});