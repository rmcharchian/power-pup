myApp.controller('EachdogController', ['DogService', '$routeParams',function(DogService, $routeParams){
    var self = this;
    self.currentDog= DogService.currentDog;
    console.log('$routeParams', $routeParams);
    DogService.getDetails($routeParams.id);
}]);