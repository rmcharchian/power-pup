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
  
  // vm.client = filestack.init('AOxruw8HTHChjTQjVfU0rz');
  // vm.showPicker = function () {
  //     vm.client.pick({
  //         accept: 'image/*'
  //         // imageMax: [600, 400]
  //     }).then(function (result) {
  //         vm.newPath.photos = result.filesUploaded[0].url;
  //     });

  // }