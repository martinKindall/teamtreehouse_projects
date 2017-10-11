var app = angular.module('todoListApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider  
  .when('/', {
    controller: 'SimpleController',
    templateUrl: 'partials/view1.html'
  })
  .when('/prueba', {
    controller: 'SimpleController',
    templateUrl: 'partials/view2.html'
  });  
  
});

app.factory ('simpleFactory',function() { //dentro de function se puede meter librerias http u otras para
                                          //para obtener la data necesaria.
  var customers = [
    {name:'Manuela', city:'La Serena'},
    {name:'Martin', city:'Santiago'},
    {name:'Pablo', city:'Pucon'}
  ];
  
  var factory = {};
  factory.getCustomers = function() {
    return customers;
  };
  
  return factory;
});

app.controller ('SimpleController', function ($scope, simpleFactory){
  $scope.customers = [];
  
  function init(){
    $scope.customers = simpleFactory.getCustomers();
  }
  
  init();
  
  $scope.addCustomer = function() {
    $scope.customers.push(
      {
        name: $scope.newCustomer.name,
        city: $scope.newCustomer.city 
      });
  };
});
