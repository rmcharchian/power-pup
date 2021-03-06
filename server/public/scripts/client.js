var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/dog', {  
      templateUrl: '/views/templates/dog.html',
      controller: 'DogController as lc'
    })
    .when('/training', {  
      templateUrl: '/views/templates/training.html',
      controller: 'TrainingController as lc'
        }) 
    .when('/commands', {
      templateUrl: '/views/templates/info.html',
      controller: 'CommandsController as cc'
    })  
    .when('/as_needed_commands', {
      templateUrl: '/views/templates/info.html',
      controller: 'AsNeededCommandsController as cc'
    }) 
    .when('/eachdog/:id', {
      templateUrl: '/views/templates/eachdog.html',
      controller: 'EachdogController as ec'
    }) 
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'CommandsController as cc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});



