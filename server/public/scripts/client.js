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

// var self = this;
// var filestackAPIKey = 'AaN98nhRTamCfV3Suca0Zz';



// self.getFilestackImage = function() {
//   // example request:
//   // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
//   var baseUrl = 'http://api.giphy.com/v1/gifs/trending?';
//   baseUrl += 'api_key=' + giphyAPIKey;    // api key
//   baseUrl += '&limit=5';  // limit
//   baseUrl += '&rating=g'; // rating

//   console.log('baseUrl: ', baseUrl);
  
//   $http.get(baseUrl).then(function(response) {
//       console.log('trendaing giphys ', response.data);
      
//   });
// };

