myApp.controller('DogController', function(UserService) {
    console.log('DogController created');
    var vm = this;
    vm.userService = UserService;
  });
  