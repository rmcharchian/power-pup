myApp.controller('DogController', function(DogService, UserService) {
    console.log('DogController created');
    var vm = this;

    vm.addDog = function (newDog){
      DogService.addDog(newDog);
      console.log(newDog);
    }
    vm.dogs = DogService.dogs;

    DogService.getDog();

    vm.logout = function (){
UserService.logout();
DogService.currentDog=[];
    };
  });
  
