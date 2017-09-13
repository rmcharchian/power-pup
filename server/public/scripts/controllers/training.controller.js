myApp.controller('TrainingController', function(UserService) {
    console.log('TrainingController created');
    var vm = this;
    vm.userService = UserService;
  });