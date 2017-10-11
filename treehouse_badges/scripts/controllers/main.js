'use-strict';
angular.module("badgesApp")
.controller('mainCtrl', function($scope, dataFactory){

	init();

	function add(a, b)
	{
		return a + b;
	}


	function init()
	{
		initData();
		botones();
	}

	function initData()
	{
		$scope.labels_semester_1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
		$scope.labels_semester_2 = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		
		$scope.series = ['Badges'];

		$scope.scale = 7;

		$scope.options = 
		{
			scaleOverride : true,
			scaleSteps : 5,
			scaleStepWidth : $scope.scale,
			scaleStartValue : 0
		};

		$scope.data1 = [0,0,0,0,0,0];
		$scope.data2 = [0,0,0,0,0,0];

		$scope.data_semester_1 = [$scope.data1];
		$scope.data_semester_2 = [$scope.data2];

		$scope.years = [2012, 2013, 2014, 2015, 2016, 2017];

		$scope.errorMessage = "";
	}

	function botones()
	{
		$scope.getBadges = function()
		{
			$scope.busy = true;

			dataFactory.getBadges($scope.user.username)
			.then(
				function success(payload)
				{
					//console.dir(payload.data.badges.length);
					try
					{
						$scope.isError = false;
						$scope.user.badges_total = payload.data.badges.length;

						var badges = payload.data.badges;
						
						var badges_per_month = Array.apply(null, Array(12)).map(Number.prototype.valueOf,0);
						var date;

						for (var i=0;i<badges.length;++i)
						{
							date = moment(badges[i].earned_date);
							if (i == 0) $scope.join_date = date;
							if (date.year() == $scope.year)
							{
								badges_per_month[date.month()] += 1;
							}

						}

						$scope.max_badges_month = Math.max.apply(Math, badges_per_month);
						$scope.options.scaleStepWidth = Math.ceil($scope.max_badges_month / 5);
						if ($scope.options.scaleStepWidth == 0) $scope.options.scaleStepWidth = 2;

						$scope.user.badges = badges_per_month.reduce(add, 0);
						var past_months = 12;
						var today = moment(new Date());

						if ($scope.year == today.year()) past_months = moment(new Date()).month() + 1;
						if ($scope.year == $scope.join_date.year()) past_months = 12 - $scope.join_date.month();

						$scope.user.average = ($scope.user.badges / past_months).toFixed(1);

						for (var i=0;i<6;++i)
						{
							$scope.data1[i] = badges_per_month[i];
							$scope.data2[i] = badges_per_month[i+6];
						}
						console.log(badges_per_month);
					}
					catch (error)
					{
						$scope.isError = true;
						$scope.errorMessage = "Error parsing data" + "(" + error + ")";
					}

					$scope.busy = false;
				},
				function error(payload)
				{
					$scope.isError = true;
					console.log(payload.name);
					if (payload.status != null)
					{
						$scope.errorMessage = "There was an error: (status " + payload.status + ")";
					}
					else if (payload.name == "SyntaxError")
					{			
						$scope.errorMessage = "There was an error: username not found";
					}
					else
					{
						$scope.user.badges = payload.name;
					}
					$scope.busy = false;
				}
			);
		}
	}
});
