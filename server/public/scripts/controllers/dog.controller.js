myApp.controller('DogController', function(DogService) {
    console.log('DogController created');
    var vm = this;

    vm.addDog = function (newDog){
      DogService.addDog(newDog);
      console.log(newDog);
    }
    vm.dogs = DogService.dogs;


  });
  