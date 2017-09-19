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

    //FILESTACK
    // vm.client = filestack.init('A1SPIH3lDTX2G1gQi8PaWz');
    // vm.showPicker=function () {
    //     vm.client.pick({
    //     }).then(function(result) {

    //         console.log(JSON.stringify(result.filesUploaded[0].url))
    //     });
   //}









  });
  